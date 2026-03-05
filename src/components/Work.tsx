import React from 'react';
import styles from './Page.module.css';

interface Props {
  onBack: () => void;
}

const Work: React.FC<Props> = ({ onBack }) => {
  return (
    <div className={styles.page}>
      <button className={styles.back} onClick={onBack}>← index</button>
      <header className={styles.header}>
        <h1 className={styles.title}>Work</h1>
      </header>
      <div className={styles.body}>
        <p>This is where your projects go.</p>
      </div>
    </div>
  );
};

export default Work;
