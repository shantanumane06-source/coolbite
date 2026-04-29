import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <div className={styles.logo} onClick={() => handleNavClick('home')}>
          <span className={styles.logoIcon}>💧</span>
          <span className={styles.logoText}>Cool<span className={styles.logoAccent}>Bite</span></span>
        </div>

        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          {['home', 'about', 'contact'].map((id) => (
            <li key={id}>
              <button className={styles.navBtn} onClick={() => handleNavClick(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
          <li>
            <button className={styles.ctaBtn} onClick={() => handleNavClick('contact')}>
              Order Now
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {['home', 'about', 'contact'].map((id) => (
          <button key={id} className={styles.mobileNavBtn} onClick={() => handleNavClick(id)}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
        <button className={styles.mobileCta} onClick={() => handleNavClick('contact')}>
          Order Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
