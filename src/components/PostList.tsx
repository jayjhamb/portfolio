import React from 'react';
import { Post } from '../types';
import styles from './PostList.module.css';
import pageStyles from './Page.module.css';

interface Props {
  posts: Post[];
  onSelect: (slug: string) => void;
  onBack: () => void;
}

const PostList: React.FC<Props> = ({ posts, onSelect, onBack }) => {
  return (
    <div className={styles.home}>
      <button className={pageStyles.back} onClick={onBack}>← index</button>
      <div className={styles.siteTitle}>journal</div>
      <ul className={styles.list}>
        {posts.map((post, i) => (
          <li
            key={post.slug}
            className={styles.item}
            style={{ animationDelay: `${0.05 + i * 0.07}s` }}
            onClick={() => onSelect(post.slug)}
          >
            <span className={styles.title}>{post.title}</span>
            <span className={styles.date}>{post.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
