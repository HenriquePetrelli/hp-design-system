export const convertHexToRgb = (color: string) => {
  if (!color) return ''

  if (color.startsWith('var(')) {
    return color
  }

  // HEX
  if (color.startsWith('#')) {
    const hex = color.replace('#', '')

    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)

    return `${r}, ${g}, ${b}`
  }

  // rgb() ou rgba()
  if (color.startsWith('rgb')) {
    return color
      .replace(/rgba?\(|\s|\)/g, '')
      .split(',')
      .slice(0, 3)
      .join(', ')
  }

  return ''
}
