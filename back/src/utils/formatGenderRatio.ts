export default function formatGenderChance(chance: number): string {
  if (chance === -1) {
    return 'genderless'
  }

  const malePercentage = (chance / 8) * 100
  const femalePercentage = 100 - malePercentage

  return `${malePercentage.toFixed(1)}% ♂ ${femalePercentage.toFixed(1)}% ♀`
}
