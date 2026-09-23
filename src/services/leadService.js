const DESK_URL = "https://deskbackend.getnos.io/v1/lead";

const API_KEY =
  "lh_IMStq587xaL2C0Syo7Oupu12_TJSIeD4piZ9Bn2inbc";

let submitting = false;

/**
 * Submit lead to Getnos Desk
 */
export async function submitLead(fields) {
  /*
   * Prevent duplicate requests
   */
  if (submitting) {
    return {
      duplicate: true,
      skipped: true,
    };
  }

  submitting = true;

  try {
    const payload = {
      form: "contact",

      /*
       * Desk email subject
       */
      subject:
        "New DexKor Reduce Message Cost Lead",

      honeypot: fields.honeypot || "",

      /*
       * All lead fields
       */
      ...fields,

      /*
       * Always keep the required subject
       */
      subject:
        "New DexKor Reduce Message Cost Lead",
    };

    const response = await fetch(
      DESK_URL,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },

        body: JSON.stringify(payload),

        keepalive: true,
      }
    );

    let data = {};

    try {
      data = await response.json();
    } catch {
      data = {};
    }

    /*
     * Desk duplicate response
     *
     * Desk ignores identical payloads
     * for a short period.
     */
    if (data.duplicate) {
      return data;
    }

    /*
     * API error
     */
    if (!response.ok) {
      throw new Error(
        data.message ||
          `Lead submit failed (${response.status})`
      );
    }

    /*
     * Successful response
     */
    return data;
  } catch (error) {
    console.error(
      "[Getnos Desk Lead]",
      error
    );

    throw error;
  } finally {
    submitting = false;
  }
}

/**
 * Get tracking fields from URL
 */
export function getTrackingFields() {
  const params =
    new URLSearchParams(
      window.location.search
    );

  const trackingKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "fbclid",
  ];

  const tracking = {};

  trackingKeys.forEach((key) => {
    const value = params.get(key);

    if (value) {
      tracking[key] = value;
    }
  });

  return tracking;
}