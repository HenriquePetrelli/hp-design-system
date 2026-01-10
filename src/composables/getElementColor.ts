export const getParentBackgroundColor = (id: string) => {
  const element = document.getElementById(id)

  if (!element || !element.parentElement) {
    return ''
  }

  try {
    return window.getComputedStyle(element.parentElement).backgroundColor
  } catch (error) {
    console.error('Erro ao capturar cor de fundo:', error)
    return ''
  }
}
