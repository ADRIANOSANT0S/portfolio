function navigateToSection(sectionId) {
  if (this.$route.path === '/detailsProjects/' || this.$route.path === '/detailsProjects') {
    this.$router.push({ path: '/', hash: '#' + sectionId })
  } else {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      console.warn('Seção não encontrada:', sectionId)
    }
  }
}

export default navigateToSection
