/**
 * Indian digit grouping: 1,40,000 / 1,52,600 / 31,766.
 * @param {number} n
 * @param {number} decimals
 */
export function formatINR(n, decimals = 0) {
  const fixed = Math.abs(Number(n)).toFixed(decimals);
  const [int, dec] = fixed.split('.');
  const last3 = int.slice(-3);
  const rest = int.slice(0, -3);
  const grouped = rest ? rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + last3 : last3;
  const sign = Number(n) < 0 ? '-' : '';
  return sign + (dec ? `${grouped}.${dec}` : grouped);
}
