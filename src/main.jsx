import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import i18n from './i18n'
import App from './App.jsx'

const startTime = performance.now()
const MIN_LOADER_TIME = 1200

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function hideLoader() {
  const loader = document.getElementById('initial-loader')
  if (!loader) return

  const elapsed = performance.now() - startTime
  const remaining = Math.max(0, MIN_LOADER_TIME - elapsed)

  setTimeout(() => {
    loader.classList.add('hide')
    document.body.classList.add('ready')
    setTimeout(() => loader.remove(), 500)
  }, remaining)
}

if (document.readyState === 'complete') {
  hideLoader()
} else {
  window.addEventListener('load', hideLoader)
}

const set = (sel, key, fallback) => {
  const el = document.querySelector(sel)
  if (el) el.textContent = i18n.t(key, fallback)
}

const updateLoaderLanguage = () => {
  document.documentElement.lang = i18n.language
  set('#initial-loader .eyebrow', 'loader.eyebrow', 'Chef Capybara')
  set('#initial-loader .title', 'loader.title', 'Preparing your table for a memorable evening...')
  set('#initial-loader .desc', 'loader.desc', 'Please wait a moment')
  set('#initial-loader .row span', 'loader.loading', 'Loading...')
}

updateLoaderLanguage()
i18n.on('languageChanged', updateLoaderLanguage)