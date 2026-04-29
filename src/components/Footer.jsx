import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>💧</span>
            <span className={styles.logoText}>Cool<span className={styles.logoAccent}>Bite</span></span>
          </div>
          <p className={styles.tagline}>
            Pure Refreshment, Every Sip.<br />
            Nature's finest water, delivered to you.
          </p>
          {/* Social Icons */}
          <div className={styles.socials}>
            {[
              { icon: '𝕏', label: 'Twitter' },
              { icon: 'f', label: 'Facebook' },
              { icon: '▶', label: 'YouTube' },
              { icon: '📸', label: 'Instagram' },
            ].map(({ icon, label }) => (
              <button key={label} className={styles.social} aria-label={label}>
                {icon}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Navigate</h4>
            {['home', 'about', 'contact'].map((id) => (
              <button key={id} className={styles.link} onClick={() => scrollTo(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Products</h4>
            {['Sparkling Water', 'Still Water', 'Mineral+', 'Family Pack', 'Office Bulk'].map((p) => (
              <span key={p} className={styles.link}>{p}</span>
            ))}
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            {['About Us', 'Careers', 'Sustainability', 'Press', 'Blog'].map((p) => (
              <span key={p} className={styles.link}>{p}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} CoolBite Pvt. Ltd. All rights reserved.
        </p>
        <div className={styles.legal}>
          <span className={styles.legalLink}>Privacy Policy</span>
          <span className={styles.dot}>·</span>
          <span className={styles.legalLink}>Terms of Service</span>
          <span className={styles.dot}>·</span>
          <span className={styles.legalLink}>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
