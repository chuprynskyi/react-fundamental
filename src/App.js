import React, { useState } from 'react';
import PostForm from './conmponents/PostForm';
import { PostList } from './conmponents/PostList';
import { MySelect } from './conmponents/UI/select/MySelect';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript1', body: '3Javascript - мова програмування' },
    { id: 2, title: 'Javascript2', body: '2Javascript - мова програмування' },
    { id: 3, title: 'Javascript3', body: '1Javascript - мова програмування' },
  ]);
  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id)  );
  };

  const sortPost = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b.sort)));
  }

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect 
          value={selectedSort}
          onChange={sortPost}
          defaultValue='Сортування'
          options={[
            {value: 'title', name: 'По назві'},
            {value: 'body', name: 'По опису'}
          ]}
        />
      </div>
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title='Список постів' />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Пости не були знайдені</h1>
      )}
    </div>
  );
}

export default App;
