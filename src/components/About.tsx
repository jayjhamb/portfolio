import React from 'react';
import styles from './Page.module.css';

interface Props {
  onBack: () => void;
}

const About: React.FC<Props> = ({ onBack }) => {
  return (
    <div className={styles.page}>
      <button className={styles.back} onClick={onBack}>← index</button>
      <header className={styles.header}>
        <h1 className={styles.title}>About</h1>
      </header>
      <div className={styles.body}>
        <p>This is where your about text goes.</p>
      </div>
    </div>
  );
};

export default About;
