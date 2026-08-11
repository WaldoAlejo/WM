import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { SocialIcon } from './SocialIcon';
import { useMainNav } from '../data/navigation';
import { contactInfo } from '../data/company';
import { useContent } from '../i18n/useContent';
import { isPending } from '../types';
import { PendingNote } from './PendingNote';
import { cn } from '../utils/cn';

export function Footer() {
  const year = new Date().getFullYear();
  const mainNav = useMainNav();
  const content = useContent();
  const activeSocials = contactInfo.socials.filter((s) => !isPending(s.url));

  return (
    <footer className="border-t border-wm-gray-300 bg-wm-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div
          className={cn(
            'grid grid-cols-1 gap-10',
            activeSocials.length > 0 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3',
          )}
        >
          <div>
            <Logo height={40} />
            <p className="mt-4 max-w-xs text-sm text-wm-gray-700">{content.hero.subtitle}</p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-wm-gray-500">
              {content.footer.navHeading}
            </h3>
            <ul className="space-y-2">
              {mainNav.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-wm-black hover:text-wm-gray-500">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-wm-gray-500">
              {content.footer.contactHeading}
            </h3>
            <ul className="space-y-2 text-sm text-wm-gray-700">
              <li>
                {isPending(contactInfo.email) ? (
                  <PendingNote label={content.footer.emailPending} />
                ) : (
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-wm-black">
                    {contactInfo.email}
                  </a>
                )}
              </li>
              <li>
                {isPending(contactInfo.phone) ? (
                  <PendingNote label={content.footer.phonePending} />
                ) : (
                  contactInfo.phone
                )}
              </li>
            </ul>
          </div>

          {activeSocials.length > 0 && (
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-wm-gray-500">
                {content.footer.followHeading}
              </h3>
              <ul className="flex items-center gap-3">
                {activeSocials.map((social) => (
                  <li key={social.icon}>
                    <a
                      href={social.url as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center border border-wm-gray-300 text-wm-black transition-colors hover:border-wm-copper hover:text-wm-copper-dark"
                    >
                      <SocialIcon icon={social.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-wm-gray-300 pt-6 text-xs text-wm-gray-500 sm:flex-row">
          <p>
            © {year} WM. {content.footer.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
