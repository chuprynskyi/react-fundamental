import React, { useEffect, useState } from 'react';
import PostService from './API/PostService';
import { MyModal } from './conmponents/MyModal/MyModal';
import { PostFilter } from './conmponents/PostFilter';
import PostForm from './conmponents/PostForm';
import { PostList } from './conmponents/PostList';
import { MyButton } from './conmponents/UI/buttom/MyButton';
import { Loader } from './conmponents/UI/Loader/Loader';
import { UseFetching } from './hooks/useFetching';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = UseFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className='App'>
      <MyButton style={{ marginTop: 20 }} onClick={() => setModal(true)}>
        Створити користувача
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && 
        <h1>Error ${postError}</h1>
      }
      {isPostsLoading ? (
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title='Список постів'
        />
      )}
    </div>
  );
}

export default App;
