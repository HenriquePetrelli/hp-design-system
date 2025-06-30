export const convertHexToRgb = (color: string) => {
  if (color.startsWith('var(--')) return '120, 120, 120'
  if (color.startsWith('#')) {
    const hex = color.replace('#', '')
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    return `${r}, ${g}, ${b}`
  }
  if (color.includes('rgb(')) {
    return color
      .replace(/rgba?\(|\s|\)/g, '')
      .split(',')
      .slice(0, 3)
      .join(', ')
  }
  return '0, 0, 0' // Fallback
}
