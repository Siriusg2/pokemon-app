export default function formatDecimetersToFeetAndInches(
  decimeters: number,
): string {
  // 1 metro = 10 decímetros
  const meters = decimeters / 10

  // 1 pie = 0.3048 metros
  const feet = Math.floor(meters / 0.3048)

  // Las pulgadas restantes después de convertir a pies
  const remainingInches = Math.round((meters / 0.3048 - feet) * 12)

  return `${feet}' ${remainingInches}"`
}
