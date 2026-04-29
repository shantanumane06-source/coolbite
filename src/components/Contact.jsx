import React, { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error'
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      {/* Wave top */}
      <div className={styles.waveTop}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,30 C360,80 1080,-20 1440,40 L1440,0 L0,0 Z"
            fill="#F8FDFF"
          />
        </svg>
      </div>

      <div className={styles.inner}>
        <div className={`${styles.left} ${visible ? styles.visible : ''}`}>
          <span className={styles.eyebrow}>Get in Touch</span>
          <h2 className={styles.title}>
            Thirsty for More?<br />
            <span className={styles.accent}>Let's Talk.</span>
          </h2>
          <p className={styles.subtitle}>
            Whether you want to place a bulk order, partner with us, or just say hello —
            our team is ready to respond faster than you can finish a glass.
          </p>

          <div className={styles.infoCards}>
            {[
              { icon: '📍', label: 'Our Office', value: '42 Blue Horizon Street, Mumbai 400001' },
              { icon: '📞', label: 'Call Us', value: '+91 98765 43210' },
              { icon: '✉️', label: 'Email', value: 'hello@coolbite.in' },
            ].map(({ icon, label, value }) => (
              <div key={label} className={styles.infoCard}>
                <span className={styles.infoIcon}>{icon}</span>
                <div>
                  <p className={styles.infoLabel}>{label}</p>
                  <p className={styles.infoValue}>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.right} ${visible ? styles.visible : ''}`}>
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Send a Message</h3>

            {status === 'success' && (
              <div className={styles.successMsg}>
                ✅ Message sent! We'll get back to you within 24 hours.
              </div>
            )}
            {status === 'error' && (
              <div className={styles.errorMsg}>
                ⚠️ Please fill in all fields before submitting.
              </div>
            )}

            <div className={styles.formGroup}>
              <label className={styles.label}>Full Name</label>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Email Address</label>
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Message</label>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                name="message"
                placeholder="Tell us how we can help you..."
                rows={5}
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button
              className={styles.submitBtn}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <span className={styles.spinner} />
              ) : (
                <>Send Message <span>→</span></>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
