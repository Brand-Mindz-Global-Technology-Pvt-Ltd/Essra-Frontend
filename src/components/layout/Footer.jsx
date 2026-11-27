import {
  BadgeCheck,
  Globe,
  Leaf,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { navigation } from '@/data/navigation.data';
import { site, supportLinks } from '@/data/site.data';
import Brand from '@/components/common/Brand';

const FOOTER_SUPPORT_KEYS = [
  'contact',
  'retailer',
  'shipping',
  'refund',
  'returns',
];

const FOOTER_LEGAL_KEYS = ['privacy', 'terms', 'about'];

export default function Footer() {
  const supportColumnLinks = supportLinks.filter((item) =>
    FOOTER_SUPPORT_KEYS.includes(item.key),
  );
  const legalLinks = supportLinks.filter((item) =>
    FOOTER_LEGAL_KEYS.includes(item.key),
  );

  return (
    <footer className="bg-maroon pt-14 text-paper sm:pt-16">
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.65fr_0.8fr_0.95fr_1.1fr] lg:gap-10 xl:gap-12">
          <div>
            <Brand />
            <p className="mt-5 max-w-[320px] font-sans text-xs leading-relaxed text-paper/85">
              {site.description}
            </p>

            <div
              className="mt-6 flex flex-wrap items-center gap-1.5 sm:flex-nowrap sm:gap-2"
              aria-label="Quality and trust certifications"
            >
              <span className="inline-flex h-8 flex-none items-center rounded-md bg-paper px-2.5 font-serif text-xs font-bold tracking-tight text-[#1a3a7a] italic shadow-xs">
                fssai
              </span>

              <span className="inline-flex h-8 flex-none items-center gap-1 rounded-md bg-paper px-2 text-ink shadow-xs">
                <ShieldCheck
                  size={13}
                  className="flex-none text-emerald-700"
                  aria-hidden="true"
                />
                <span className="font-sans text-[0.48rem] leading-[1.1] font-bold whitespace-nowrap uppercase">
                  Secure
                  <span className="block">Payment</span>
                </span>
              </span>

              <span className="inline-flex h-8 flex-none items-center gap-1 rounded-md bg-paper px-2 text-ink shadow-xs">
                <BadgeCheck
                  size={13}
                  className="flex-none text-ink"
                  aria-hidden="true"
                />
                <span className="font-sans text-[0.48rem] leading-[1.1] font-bold whitespace-nowrap uppercase">
                  Lab
                  <span className="block">Verified</span>
                </span>
              </span>

              <span className="inline-flex h-8 flex-none items-center gap-1 rounded-md bg-paper px-2 text-ink shadow-xs">
                <Globe
                  size={13}
                  className="flex-none text-ink"
                  aria-hidden="true"
                />
                <span className="font-sans text-[0.48rem] leading-[1.1] font-bold whitespace-nowrap uppercase">
                  Worldwide
                  <span className="block">Shipping</span>
                </span>
              </span>

              <span className="inline-flex h-8 flex-none items-center gap-1 rounded-md bg-paper px-2 text-ink shadow-xs">
                <Leaf
                  size={13}
                  className="flex-none text-emerald-700"
                  aria-hidden="true"
                />
                <span className="font-sans text-[0.45rem] leading-[1.1] font-bold whitespace-nowrap uppercase">
                  No Added
                  <span className="block">Preservatives</span>
                </span>
              </span>
            </div>
          </div>

          <div>
            <h2 className="font-sans text-sm font-semibold text-paper">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5 font-sans text-xs text-paper/85">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="transition-colors hover:text-paper hover:underline hover:underline-offset-4 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-paper"
                  >
                    {item.label === 'Blogs' ? 'Blog' : item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-sm font-semibold text-paper">
              Customer Support
            </h2>
            <ul className="mt-4 space-y-2.5 font-sans text-xs text-paper/85">
              {supportColumnLinks.map((item) => (
                <li key={item.key}>
                  <Link
                    to={`/?policy=${item.key}`}
                    className="transition-colors hover:text-paper hover:underline hover:underline-offset-4 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-sm font-semibold text-paper">
              Get In Touch
            </h2>
            <div className="mt-4 space-y-3 font-sans text-xs text-paper/85">
              {site.phone && (
                <a
                  href={`tel:${site.phone}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-paper hover:underline hover:underline-offset-4 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-paper"
                >
                  <Phone
                    size={14}
                    strokeWidth={1.8}
                    className="flex-none text-paper/75"
                    aria-hidden="true"
                  />
                  <span>{site.phone}</span>
                </a>
              )}

              {site.email && (
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-paper hover:underline hover:underline-offset-4 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-paper"
                >
                  <Mail
                    size={14}
                    strokeWidth={1.8}
                    className="flex-none text-paper/75"
                    aria-hidden="true"
                  />
                  <span>{site.email}</span>
                </a>
              )}

              {site.address && (
                <address className="flex items-start gap-2.5 leading-relaxed not-italic">
                  <MapPin
                    size={14}
                    strokeWidth={1.8}
                    className="mt-0.5 flex-none text-paper/75"
                    aria-hidden="true"
                  />
                  <span className="whitespace-pre-line">{site.address}</span>
                </address>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-paper/20 py-5 font-sans text-xs text-paper/80 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © 2026 ESSRA Foods Private Limited. All rights reserved.
            &ldquo;It&apos;s your healthy food&rdquo;.
          </span>

          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((item) => (
              <Link
                key={item.key}
                to={`/?policy=${item.key}`}
                className="transition-colors hover:text-paper hover:underline hover:underline-offset-4 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-paper"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
