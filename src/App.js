import React, { useMemo, useState } from 'react';
import { PostFilter } from './conmponents/PostFilter';
import PostForm from './conmponents/PostForm';
import { PostList } from './conmponents/PostList';
import MyInput from './conmponents/UI/input/MyInput';
import { MySelect } from './conmponents/UI/select/MySelect';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'aa', body: 'bb' },
    { id: 2, title: 'bb', body: 'cc' },
    { id: 3, title: 'vv', body: 'aa' },
  ]);
  const [filter, setFilter] = useState({ sort: '', query: '' });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title='Список постів'
      />
    </div>
  );
}

export default App;
