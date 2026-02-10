export const scrollToBlock = (id: string): void => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
  })
}
