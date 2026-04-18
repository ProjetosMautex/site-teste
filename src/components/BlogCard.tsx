import React from 'react';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  url: string;
  image?: string;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, date, url, image, featured = false }) => {
  return (
    <a href={url} className={`${styles.card} ${featured ? styles.featured : ''}`}>
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.date}>{date}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <div className={styles.footer}>
          <span className={styles.readMore}>Ler Artigo →</span>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
