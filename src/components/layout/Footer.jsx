import { Link } from 'react-router-dom';
import Container from '@/components/ui/Container';
import { navigation } from '@/data/navigation.data';
import { site, supportLinks } from '@/data/site.data';
import Brand from '@/components/common/Brand';

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>{site.description}</p>
            {site.certifications.length > 0 && (
              <div className="certifications">
                {site.certifications.map((badge) => (
                  <img
                    key={badge.name}
                    src={badge.image}
                    alt={badge.name}
                    width="56"
                    height="56"
                    loading="lazy"
                  />
                ))}
              </div>
            )}
            {!site.logo && (
              <p className="footer-note">Brand logo asset pending.</p>
            )}
          </div>
          <div>
            <h2>Quick Links</h2>
            <ul>
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Customer Support</h2>
            <ul>
              {supportLinks.map((item) => (
                <li key={item.key}>
                  <Link to={`/?policy=${item.key}`}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Get in Touch</h2>
            {site.address ? (
              <address>{site.address}</address>
            ) : (
              <p>
                Business contact details
                <br />
                awaiting confirmation.
              </p>
            )}
            {site.phone && <a href={`tel:${site.phone}`}>{site.phone}</a>}
            {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
            {site.socialLinks.map((social) => (
              <a
                key={social.url}
                href={social.url}
                rel="noreferrer"
                target="_blank"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ESSRA. All rights reserved.</span>
          <span>Development preview · orders are not available</span>
        </div>
      </Container>
    </footer>
  );
}
