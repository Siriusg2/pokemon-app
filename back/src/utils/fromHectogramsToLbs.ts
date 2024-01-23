export default function formatHectogramsToPounds(hectograms: number): string {
  // 1 kilogramo = 10 hectogramos
  const kilograms = hectograms / 10

  // 1 libra = 0.453592 kilogramos
  const pounds = (kilograms / 0.453592).toFixed(1)

  return `${pounds} lbs`
}
