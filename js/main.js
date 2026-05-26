document.querySelectorAll('.download-card').forEach(card => {
  card.addEventListener('click', e => {
    e.preventDefault()
    const platform = card.dataset.platform
    const urls = {
      windows: 'https://github.com/accnumber4441-del/itran-browser/releases/download/v1.0.0/itran-1.0.0.windows-x86_64.exe',
      macos: 'https://github.com/accnumber4441-del/itran-browser/releases/download/v1.0.0/itran-1.0.0.macos-aarch64.dmg',
      linux: 'https://github.com/accnumber4441-del/itran-browser/releases/download/v1.0.0/itran-1.0.0.linux-x86_64.AppImage',
    }
    window.open(urls[platform], '_blank')
  })
})

// Add GitHub link to downloads
const ghLink = document.createElement('p')
ghLink.className = 'download-note'
ghLink.innerHTML = 'All builds: <a href="https://github.com/accnumber4441-del/itran-browser/releases" target="_blank" style="color:var(--accent)">GitHub Releases</a>'
document.querySelector('.download-note').after(ghLink)
