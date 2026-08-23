import { useEffect, useState } from 'react'
import { copy, type Language } from './content'

const email = 'hello@senytoshinka.com'

const getInitialLanguage = (): Language => {
  const browserLanguages = navigator.languages.length > 0
    ? navigator.languages
    : [navigator.language]

  return browserLanguages.some((browserLanguage) =>
    browserLanguage.toLowerCase().startsWith('es'),
  ) ? 'es' : 'ja'
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = language === 'es'
      ? 'Seny to Shinka — Modernización legacy y observabilidad'
      : 'Seny to Shinka — レガシーモダナイゼーションとオブザーバビリティ'
  }, [language])

  const switchLanguage = (next: Language) => {
    setLanguage(next)
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#top" aria-label="Seny to Shinka home">
          <span>SENY</span><i>と</i><span>SHINKA</span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Menu">
          <span /><span />
        </button>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Primary navigation">
          {['services', 'method', 'japan'].map((id, index) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{t.nav[index]}</a>
          ))}
          <div className="language-switcher" aria-label="Language selector">
            <button className={language === 'es' ? 'active' : ''} onClick={() => switchLanguage('es')}>ES</button>
            <span>/</span>
            <button className={language === 'ja' ? 'active' : ''} onClick={() => switchLanguage('ja')}>日本語</button>
          </div>
          <a className="nav-cta" href={`mailto:${email}`}>{t.contact}<span>↗</span></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-grid" aria-hidden="true"><span /><span /><span /></div>
          <p className="eyebrow"><span className="signal" />{t.eyebrow}</p>
          <h1>{t.hero}<br /><em>{t.heroAccent}</em></h1>
          <div className="hero-bottom">
            <p>{t.intro}</p>
            <div className="actions">
              <a className="button button-dark" href={`mailto:${email}`}>{t.primaryCta}<span>↗</span></a>
              <a className="button button-light" href="#services">{t.secondaryCta}<span>↓</span></a>
            </div>
          </div>
          <div className="principles">
            {t.metricLabels.map((label, index) => <div key={label}><b>0{index + 1}</b><span>{label}</span></div>)}
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-heading">
            <p className="kicker">{t.servicesKicker}</p>
            <h2>{t.servicesTitle}</h2>
            <p>{t.servicesIntro}</p>
          </div>
          <div className="engagement">
            <p className="engagement-kicker">{t.engagementKicker}</p>
            <div className="engagement-options">
              {t.engagementOptions.map((option, index) => (
                <article key={option.label}>
                  <span>{option.label}</span>
                  <strong>{option.title}</strong>
                  <p>{option.body}</p>
                  <i aria-hidden="true">{index === 0 ? '◎' : '＋'}</i>
                </article>
              ))}
            </div>
          </div>
          <div className="service-list">
            {t.services.map((service) => (
              <article className="service" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div><h3>{service.title}</h3><p>{service.body}</p></div>
                <div className="tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="method section-pad" id="method">
          <div className="method-intro"><p className="kicker">{t.methodKicker}</p><h2>{t.methodTitle}</h2></div>
          <div className="method-flow">
            {t.methodSteps.map((step, index) => (
              <article key={step.title}>
                <div className="step-marker"><span>{index + 1}</span></div>
                <h3>{step.title}</h3><p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="japan section-pad" id="japan">
          <div className="time-visual" aria-label="Barcelona and Tokyo time coverage">
            <div className="sun-disc">日</div>
            <div className="time-line"><span>BCN</span><i /><span>TYO</span></div>
            <p>24H CONTINUITY</p>
          </div>
          <div className="japan-copy">
            <p className="kicker">{t.japanKicker}</p><h2>{t.japanTitle}</h2><p>{t.japanBody}</p>
            <ul>{t.japanPoints.map((point) => <li key={point}><span>✓</span>{point}</li>)}</ul>
          </div>
        </section>

        <section className="closing section-pad">
          <p className="kicker">{t.closingKicker}</p>
          <h2>{t.closingTitle}</h2><p>{t.closingBody}</p>
          <a className="button button-accent" href={`mailto:${email}`}>{t.closingCta}<span>↗</span></a>
        </section>
      </main>

      <footer className="footer section-pad">
        <div className="brand brand-footer"><span>SENY</span><i>と</i><span>SHINKA</span></div>
        <p>{t.footer}</p>
        <a href={`mailto:${email}`}>{email}</a>
        <span>Barcelona · Tokyo · {new Date().getFullYear()}</span>
      </footer>
    </div>
  )
}

export default App
