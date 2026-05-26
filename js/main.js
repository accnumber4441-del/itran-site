document.querySelectorAll('.download-card').forEach(card => {
  card.addEventListener('click', e => {
    e.preventDefault()
    window.open('https://github.com/accnumber4441-del/itran-browser/releases', '_blank')
  })
})
