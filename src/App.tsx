import React, { useState } from 'react';
import { posts } from './data/posts';
import Home, { Section } from './components/Home';
import PostList from './components/PostList';
import PostView from './components/PostView';
import About from './components/About';
import Work from './components/Work';

type View =
  | { page: 'home' }
  | { page: 'journal' }
  | { page: 'post'; slug: string }
  | { page: 'about' }
  | { page: 'work' };

const App: React.FC = () => {
  const [view, setView] = useState<View>({ page: 'home' });

  const navigate = (section: Section) => setView({ page: section });
  const goHome = () => setView({ page: 'home' });
  const goJournal = () => setView({ page: 'journal' });
  const openPost = (slug: string) => setView({ page: 'post', slug });

  if (view.page === 'home') {
    return <Home onNavigate={navigate} />;
  }

  if (view.page === 'journal') {
    return <PostList posts={posts} onSelect={openPost} onBack={goHome} />;
  }

  if (view.page === 'post') {
    const post = posts.find((p) => p.slug === view.slug);
    if (!post) return <Home onNavigate={navigate} />;
    return <PostView post={post} onBack={goJournal} />;
  }

  if (view.page === 'about') {
    return <About onBack={goHome} />;
  }

  if (view.page === 'work') {
    return <Work onBack={goHome} />;
  }

  return null;
};

export default App;
