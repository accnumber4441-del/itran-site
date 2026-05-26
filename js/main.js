document.querySelectorAll('.download-card').forEach(card => {
  card.addEventListener('click', e => {
    e.preventDefault()
    const platform = card.dataset.platform
    const urls = {
      windows: 'https://github.com/accnumber4441-del/itran-browser/releases/latest',
      macos: 'https://github.com/accnumber4441-del/itran-browser/releases/latest',
      linux: 'https://github.com/accnumber4441-del/itran-browser/releases/latest',
    }
    window.open(urls[platform], '_blank')
  })
})
