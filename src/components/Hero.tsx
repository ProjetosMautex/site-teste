import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGlow}></div>
      <div className={`container ${styles.heroContent}`}>
        <h1 className={`${styles.heroTitle} animate-fade`}>
          O Futuro do Desenvolvimento <br />
          é <span className={styles.gradientText}>Rápido e Fluido</span>
        </h1>
        <p className={`${styles.heroSubtitle} animate-fade`} style={{ animationDelay: '0.2s' }}>
          Construa aplicações modernas com a performance do Bun, a flexibilidade do Astro 
          e o ecossistema do React. Tudo em um só lugar.
        </p>
        <div className={`${styles.heroActions} animate-fade`} style={{ animationDelay: '0.4s' }}>
          <button className={styles.btnPrimary}>Get Started</button>
          <button className={styles.btnSecondary}>Documentation</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
