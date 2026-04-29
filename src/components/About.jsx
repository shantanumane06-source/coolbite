import React, { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';

const features = [
  {
    icon: '🏔️',
    title: 'Mountain Source',
    desc: 'Sourced from pristine glacial springs, our water is naturally filtered through layers of rock for unparalleled purity.',
  },
  {
    icon: '🌿',
    title: 'Eco-Friendly',
    desc: 'Our bottles are made from 100% recycled materials. We are committed to zero carbon footprint by 2026.',
  },
  {
    icon: '🧪',
    title: 'Lab Certified',
    desc: 'Every batch undergoes 200+ quality checks. You get nothing but pure, mineral-balanced hydration.',
  },
  {
    icon: '⚡',
    title: 'Electrolyte Rich',
    desc: 'Naturally enriched with essential minerals that replenish your body and keep you energized all day.',
  },
  {
    icon: '🚚',
    title: 'Fast Delivery',
    desc: 'Same-day delivery in major cities. Your hydration is our priority — fresh to your doorstep, always.',
  },
  {
    icon: '💙',
    title: 'Trusted by 50K+',
    desc: 'Families, athletes, and offices across the country choose CoolBite every single day.',
  },
];

const About = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.inner}>
        {/* Header */}
        <div className={`${styles.header} ${visible ? styles.visible : ''}`}>
          <span className={styles.eyebrow}>Who We Are</span>
          <h2 className={styles.title}>
            Water, Reimagined for<br />
            <span className={styles.accent}>Modern Living</span>
          </h2>
          <p className={styles.subtitle}>
            CoolBite was born from a simple belief: everyone deserves access to pure,
            refreshing water that doesn't compromise the planet. We've spent years
            perfecting our process so you can enjoy the cleanest sip, every time.
          </p>
        </div>

        {/* Feature Grid */}
        <div className={styles.grid}>
          {features.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
              style={{ transitionDelay: `${i * 0.08 + 0.2}s` }}
            >
              <div className={styles.cardIcon}>{icon}</div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Mission Banner */}
        <div className={`${styles.mission} ${visible ? styles.visible : ''}`} style={{ transitionDelay: '0.7s' }}>
          <div className={styles.missionLeft}>
            <h3 className={styles.missionTitle}>Our Mission</h3>
            <p className={styles.missionText}>
              To make clean, premium hydration accessible to everyone while protecting
              the natural sources that make it possible. Sustainability is not a feature — it's our foundation.
            </p>
          </div>
          <div className={styles.missionRight}>
            <div className={styles.missionStat}>
              <span className={styles.missionNum}>2M+</span>
              <span className={styles.missionLabel}>Bottles Delivered</span>
            </div>
            <div className={styles.missionStat}>
              <span className={styles.missionNum}>15+</span>
              <span className={styles.missionLabel}>Cities Served</span>
            </div>
            <div className={styles.missionStat}>
              <span className={styles.missionNum}>4.9★</span>
              <span className={styles.missionLabel}>Customer Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
