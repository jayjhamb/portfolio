import React from 'react';
import styles from './Home.module.css';

export type Section = 'journal' | 'about' | 'work';

interface Props {
  onNavigate: (section: Section) => void;
}

const nav: { label: string; section: Section }[] = [
  { label: 'journal', section: 'journal' },
  { label: 'about', section: 'about' },
  { label: 'work', section: 'work' },
];

const Home: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className={styles.home}>
      <h1 className={styles.name}>Jay Jhamb</h1>
      <nav className={styles.nav}>
        {nav.map(({ label, section }, i) => (
          <button
            key={section}
            className={styles.link}
            style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            onClick={() => onNavigate(section)}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Home;
