import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  Lock,
  Loader2,
  AlertTriangle,
} from "lucide-react";

import CTAButton from "./CTAButton.jsx";
import {
  submitLead,
  getTrackingFields,
} from "../services/leadService.js";

const VOLUME_OPTIONS = [
  "50,000 to 75,000",
  "75,000 to 1,00,000",
  "1,00,000 to 1,50,000",
  "1,50,000 to 2,50,000",
  "2,50,000 to 5,00,000",
  "5,00,000+",
];

const FIELDS = [
  {
    name: "name",
    label: "Name",
    type: "text",
    autoComplete: "name",
    placeholder: "Your full name",
  },
  {
    name: "brand",
    label: "Brand Name",
    type: "text",
    autoComplete: "organization",
    placeholder: "The brand you send from",
  },
  {
    name: "email",
    label: "Work Email",
    type: "email",
    autoComplete: "email",
    placeholder: "you@yourbrand.com",
    inputMode: "email",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    autoComplete: "tel",
    placeholder: "+91 98765 43210",
    inputMode: "tel",
  },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?\d{10,15}$/;

const INITIAL = {
  name: "",
  brand: "",
  email: "",
  phone: "",
  volume: "",
};

function validate(values) {
  const errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Enter your name.";
  }

  if (values.brand.trim().length < 2) {
    errors.brand = "Enter your brand name.";
  }

  if (!EMAIL_RE.test(values.email.trim())) {
    errors.email =
      "Enter a valid work email, like you@yourbrand.com.";
  }

  const cleanedPhone = values.phone.replace(/[\s()-]/g, "");

  if (!PHONE_RE.test(cleanedPhone)) {
    errors.phone =
      "Enter a phone number with 10 to 15 digits.";
  }

  if (!values.volume) {
    errors.volume =
      "Choose your monthly WhatsApp marketing volume.";
  }

  return errors;
}

export default function LeadForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");
  const [tracking, setTracking] = useState({});

  const submittedRef = useRef(false);
  const fieldRefs = useRef({});

  /*
   * Get UTM and tracking parameters
   */
  useEffect(() => {
    setTracking(getTrackingFields());
  }, []);

  /*
   * Handle field changes
   */
  const onChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    /*
     * Revalidate field after user has touched it
     */
    if (touched[name]) {
      const updatedValues = {
        ...values,
        [name]: value,
      };

      const fresh = validate(updatedValues);

      setErrors((prev) => {
        const next = { ...prev };

        if (fresh[name]) {
          next[name] = fresh[name];
        } else {
          delete next[name];
        }

        return next;
      });
    }
  };

  /*
   * Handle field blur
   */
  const onBlur = (e) => {
    const { name } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const fresh = validate(values);

    setErrors((prev) => {
      const next = { ...prev };

      if (fresh[name]) {
        next[name] = fresh[name];
      } else {
        delete next[name];
      }

      return next;
    });
  };

  /*
   * Handle form submission
   */
  const onSubmit = async (e) => {
    e.preventDefault();

    /*
     * Prevent duplicate submission
     */
    if (
      status === "submitting" ||
      submittedRef.current
    ) {
      return;
    }

    /*
     * Validate all fields
     */
    const fresh = validate(values);

    setErrors(fresh);

    setTouched({
      name: true,
      brand: true,
      email: true,
      phone: true,
      volume: true,
    });

    /*
     * Focus first invalid field
     */
    const firstError = Object.keys(fresh)[0];

    if (firstError) {
      fieldRefs.current[firstError]?.focus();
      return;
    }

    setStatus("submitting");

    try {
      /*
       * Prepare lead data
       */
      const leadData = {
        name: values.name.trim(),

        brand: values.brand.trim(),

        email: values.email.trim(),

        phone: values.phone
          .replace(/[\s()-]/g, "")
          .trim(),

        volume: values.volume,

        /*
         * UTM / tracking fields
         */
        ...tracking,

        /*
         * Additional information
         */
        timestamp: new Date().toISOString(),

        source: "dexkor-whatsapp-cost-audit",

        /*
         * Getnos Desk subject
         */
        subject:
          "New DexKor Reduce Message Cost Lead",
      };

      /*
       * Submit to Getnos Desk
       */
      const response = await submitLead(leadData);

      console.log(
        "[LeadForm] Desk response:",
        response
      );

      /*
       * Mark as submitted
       */
      submittedRef.current = true;

      /*
       * Change form to Calendly
       */
      setStatus("success");
    } catch (error) {
      console.error(
        "[LeadForm] Submission failed:",
        error
      );

      setStatus("error");
    }
  };

  /*
   * Input styles
   */
  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-muted/70 transition-[border-color,box-shadow] focus:border-electric-500 focus:outline-none focus:ring-4 focus:ring-electric-500/20";

  const inputError =
    "border-danger focus:border-danger focus:ring-danger/20";

  const inputOk = "border-line";

  return (
    <div
      id="lead-form"
      className="scroll-mt-24 rounded-2xl bg-white p-6 text-ink shadow-deep sm:p-8"
    >
      <AnimatePresence
        mode="wait"
        initial={false}
      >
        {status === "success" ? (
          /*
           * =====================================================
           * CALENDLY AFTER SUCCESSFUL FORM SUBMISSION
           * =====================================================
           */
          <motion.div
            key="calendly"
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="w-full"
          >
            <div className="mb-5 text-center">
              <h3 className="h3 font-extrabold text-ink">
                Choose a Time for Your Demo
              </h3>

              <p className="mt-2 text-sm text-muted">
                Your details have been received.
                Pick a convenient time to speak
                with the DexKor team.
              </p>
            </div>

            <div className="w-full overflow-hidden rounded-xl">
              <iframe
                src="https://calendly.com/richard-dexkor/dexkor-demo-call-with-founder?embed_domain=dexkor.com&embed_type=Inline&hide_gdpr_banner=1"
                width="100%"
                height="700"
                frameBorder="0"
                title="Select a Date & Time - Calendly"
                className="block w-full"
                style={{
                  minHeight: "700px",
                  border: "0",
                }}
              />
            </div>
          </motion.div>
        ) : (
          /*
           * =====================================================
           * LEAD FORM
           * =====================================================
           */
          <motion.form
            key="form"
            initial={false}
            exit={{
              opacity: 0,
            }}
            noValidate
            onSubmit={onSubmit}
            aria-labelledby="lead-form-title"
            aria-busy={
              status === "submitting"
            }
          >
            <h3
              id="lead-form-title"
              className="h3 font-extrabold text-ink"
            >
              Get Your WhatsApp Savings Plan
            </h3>

            <p className="mt-2 text-sm text-muted">
              Five fields. Then we do the math.
            </p>

            {/* =================================================
                FORM FIELDS
            ================================================== */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {FIELDS.map((field) => {
                const err =
                  touched[field.name] &&
                  errors[field.name];

                return (
                  <div key={field.name}>
                    <label
                      htmlFor={`lead-${field.name}`}
                      className="mb-1.5 block text-sm font-semibold text-ink"
                    >
                      {field.label}
                    </label>

                    <input
                      id={`lead-${field.name}`}
                      ref={(el) => {
                        fieldRefs.current[
                          field.name
                        ] = el;
                      }}
                      name={field.name}
                      type={field.type}
                      inputMode={field.inputMode}
                      autoComplete={
                        field.autoComplete
                      }
                      placeholder={
                        field.placeholder
                      }
                      value={
                        values[field.name]
                      }
                      onChange={onChange}
                      onBlur={onBlur}
                      required
                      aria-required="true"
                      aria-invalid={
                        err
                          ? "true"
                          : "false"
                      }
                      aria-describedby={
                        err
                          ? `lead-${field.name}-error`
                          : undefined
                      }
                      disabled={
                        status ===
                        "submitting"
                      }
                      className={`${inputBase} ${
                        err
                          ? inputError
                          : inputOk
                      }`}
                    />

                    {err && (
                      <p
                        id={`lead-${field.name}-error`}
                        className="mt-1.5 text-[13px] font-medium text-danger"
                      >
                        {err}
                      </p>
                    )}
                  </div>
                );
              })}

              {/* ===============================================
                  MONTHLY WHATSAPP VOLUME
              ================================================ */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="lead-volume"
                  className="mb-1.5 block text-sm font-semibold text-ink"
                >
                  Monthly WhatsApp Marketing
                  Volume
                </label>

                <div className="relative">
                  <select
                    id="lead-volume"
                    ref={(el) => {
                      fieldRefs.current.volume =
                        el;
                    }}
                    name="volume"
                    value={values.volume}
                    onChange={onChange}
                    onBlur={onBlur}
                    required
                    aria-required="true"
                    aria-invalid={
                      touched.volume &&
                      errors.volume
                        ? "true"
                        : "false"
                    }
                    aria-describedby={
                      touched.volume &&
                      errors.volume
                        ? "lead-volume-error"
                        : undefined
                    }
                    disabled={
                      status ===
                      "submitting"
                    }
                    className={`${inputBase} appearance-none pr-11 ${
                      touched.volume &&
                      errors.volume
                        ? inputError
                        : inputOk
                    } ${
                      values.volume
                        ? ""
                        : "text-muted/70"
                    }`}
                  >
                    <option
                      value=""
                      disabled
                    >
                      Select messages per month
                    </option>

                    {VOLUME_OPTIONS.map(
                      (option) => (
                        <option
                          key={option}
                          value={option}
                        >
                          {option}
                        </option>
                      )
                    )}
                  </select>

                  <span
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
                    aria-hidden="true"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </div>

                {touched.volume &&
                  errors.volume && (
                    <p
                      id="lead-volume-error"
                      className="mt-1.5 text-[13px] font-medium text-danger"
                    >
                      {errors.volume}
                    </p>
                  )}
              </div>
            </div>

            {/* =================================================
                HIDDEN TRACKING FIELDS
            ================================================== */}
            {Object.entries(tracking).map(
              ([key, value]) => (
                <input
                  key={key}
                  type="hidden"
                  name={key}
                  value={value}
                  readOnly
                />
              )
            )}

            {/* =================================================
                ERROR MESSAGE
            ================================================== */}
            {status === "error" && (
              <div
                role="alert"
                className="mt-5 flex items-start gap-3 rounded-xl border border-danger/30 bg-danger/5 p-4 text-sm text-ink"
              >
                <AlertTriangle
                  size={18}
                  className="mt-0.5 shrink-0 text-danger"
                  aria-hidden="true"
                />

                <p>
                  Your details didn't go
                  through. Check your connection
                  and try again.
                </p>
              </div>
            )}

            {/* =================================================
                SUBMIT BUTTON
            ================================================== */}
            <div className="mt-6">
              <CTAButton
                type="submit"
                size="lg"
                full
                disabled={
                  status === "submitting"
                }
                aria-disabled={
                  status === "submitting"
                }
              >
                {status === "submitting" ? (
                  <>
                    <Loader2
                      size={20}
                      className="animate-spin"
                      aria-hidden="true"
                    />

                    Sending your details
                  </>
                ) : (
                  "Show Me My WhatsApp Savings"
                )}
              </CTAButton>
            </div>

            {/* =================================================
                PRIVACY MESSAGE
            ================================================== */}
            <p className="mt-4 flex items-start gap-2 text-[13px] leading-relaxed text-muted">
              <Lock
                size={14}
                className="mt-0.5 shrink-0"
                aria-hidden="true"
              />

              <span>
                No spam. We'll use this only to
                send your savings plan and open
                your results.
              </span>
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}