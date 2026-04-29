import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Animated bg bubbles */}
      <div className={styles.bubbles}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`${styles.bubble} ${styles[`b${i + 1}`]}`} />
        ))}
      </div>

      {/* Wave bottom */}
      <div className={styles.waveWrapper}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,60 C240,110 480,10 720,60 C960,110 1200,10 1440,60 L1440,120 L0,120 Z"
            fill="#F8FDFF"
          />
        </svg>
      </div>

      <div className={`${styles.content} ${visible ? styles.visible : ''}`}>
        <div className={styles.badge}>🌊 100% Pure &amp; Natural</div>

        <h1 className={styles.heading}>
          Pure Refreshment,<br />
          <span className={styles.headingAccent}>Every Sip.</span>
        </h1>

        <p className={styles.tagline}>
          From pristine sources to your hands — CoolBite delivers water<br className={styles.br} />
          the way nature intended it. Clean, crisp, alive.
        </p>

        <div className={styles.actions}>
          <button className={styles.primaryBtn} onClick={scrollToContact}>
            Order Now
            <span className={styles.arrow}>→</span>
          </button>
          <button className={styles.secondaryBtn} onClick={scrollToAbout}>
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          {[
            { value: '100%', label: 'Natural Source' },
            { value: '0', label: 'Additives' },
            { value: '50K+', label: 'Happy Customers' },
          ].map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating bottle visual */}
      <div className={`${styles.visual} ${visible ? styles.visible : ''}`}>
        <div className={styles.bottleCard}>
          <div className={styles.bottleGlow} />
          <div className={styles.bottleEmoji}>💧</div>
          <div className={styles.bottleRipples}>
            <div className={styles.ripple} />
            <div className={styles.ripple} />
            <div className={styles.ripple} />
          </div>
          <p className={styles.bottleLabel}>CoolBite</p>
          <p className={styles.bottleSub}>Premium Drinking Water</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
