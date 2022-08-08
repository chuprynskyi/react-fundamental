import React, { useState } from 'react';
import PostForm from './conmponents/PostForm';
import { PostList } from './conmponents/PostList';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Javascript - мова програмування' },
    { id: 2, title: 'Javascript', body: 'Javascript - мова програмування' },
    { id: 3, title: 'Javascript', body: 'Javascript - мова програмування' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <PostList posts={posts} title='Список постів' />
    </div>
  );
}

export default App;
