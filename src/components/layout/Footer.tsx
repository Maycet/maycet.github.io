import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { lang = 'en' } = useParams<{ lang: string }>()
  const { t } = useTranslation()
  const otherLang = lang === 'es' ? 'en' : 'es'
  const year = new Date().getFullYear()

  return (
    <footer
      style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-secondary)' }}
      className="mt-auto"
    >
      <div className="container pt-6 pb-20">
        <div className="flex flex-col md:flex-row justify-between gap-4 text-sm text-[var(--text-muted)]">
          <div>
            <p>
              {t('footer.hostedBy')}{' '}
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">
                GitHub
              </a>
            </p>
            <div className="flex gap-2 mt-1">
              <Link
                to={`/${lang}`}
                className={`font-semibold uppercase tracking-wider text-xs ${lang === 'en' ? 'text-[var(--accent)]' : 'hover:text-[var(--accent)]'}`}
              >
                en
              </Link>
              <span>-</span>
              <Link
                to={`/${otherLang}`}
                className={`font-semibold uppercase tracking-wider text-xs ${lang === 'es' ? 'text-[var(--accent)]' : 'hover:text-[var(--accent)]'}`}
              >
                es
              </Link>
            </div>
          </div>

          <div className="text-right">
            <p>
              {t('footer.termsAcceptance')}{' '}
              <Link to={`/${lang}/terms-of-use`} className="hover:text-[var(--accent)]">
                {t('footer.terms')}
              </Link>
            </p>
            <p>{t('footer.copyright', { year })}</p>
            <p>
              {t('footer.contact')}{' '}
              <a href="mailto:contact.maycet@gmail.com" className="hover:text-[var(--accent)]">
                contact.maycet@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
