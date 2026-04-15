import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.bgScrolled : styles.bgTransparent}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          ASTRO<span>BUN</span>
        </div>
        
        <div className={styles.links}>
          <a href="/" className={styles.link}>Início</a>
          <a href="/teste-de-outlines" className={styles.link}>Outlines</a>
          <a href="#" className={styles.link}>Sobre</a>
          <a href="#" className={styles.btn}>
            Começar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
