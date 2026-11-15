import React, { useEffect, useRef } from 'react';
import { Post } from '../types';
import pageStyles from './Page.module.css';
import styles from './PostView.module.css';

interface Props {
  post: Post;
  onBack: () => void;
}

const PostView: React.FC<Props> = ({ post, onBack }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post.slug]);

  // Auto-resize iframe to content height
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || !post.richHtml) return;
    const resize = () => {
      if (iframe.contentDocument?.body) {
        iframe.style.height = iframe.contentDocument.body.scrollHeight + 'px';
      }
    };
    iframe.addEventListener('load', resize);
    return () => iframe.removeEventListener('load', resize);
  }, [post.richHtml]);

  // Rich post: render full HTML in an iframe
  if (post.richHtml) {
    return (
      <div className={styles.richWrapper}>
        <button className={styles.richBack} onClick={onBack}>← index</button>
        <iframe
          ref={iframeRef}
          className={styles.richFrame}
          srcDoc={post.richHtml}
          title={post.title}
          sandbox="allow-same-origin"
        />
      </div>
    );
  }

  // Standard post
  return (
    <div className={pageStyles.page}>
      <button className={pageStyles.back} onClick={onBack}>← index</button>
      <header className={pageStyles.header}>
        <h1 className={pageStyles.title}>{post.title}</h1>
        <time className={styles.date}>{post.date}</time>
      </header>
      <div
        className={pageStyles.body}
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </div>
  );
};

export default PostView;
