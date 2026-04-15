import React from 'react';
import styles from './Features.module.css';

const features = [
  {
    title: 'Astro Framework',
    description: 'Ilhas de interatividade para performance máxima e menos JavaScript.',
    icon: '🚀'
  },
  {
    title: 'Bun Runtime',
    description: 'Execução instantânea, gerenciamento de pacotes ultra-rápido.',
    icon: '🍞'
  },
  {
    title: 'React Ecosystem',
    description: 'Componentes reutilizáveis e a biblioteca de UI mais popular.',
    icon: '⚛️'
  }
];

const Features = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Por que escolher essa Stack?</h2>
        <div className={styles.featuresGrid}>
          {features.map((f, i) => (
            <div key={i} className={styles.featureCard}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <h3 className={styles.featureCardTitle}>{f.title}</h3>
              <p className={styles.featureCardDesc}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
