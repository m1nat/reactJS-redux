import React, { useRef, useState } from 'react';
import PostList from './components/Post-list';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';


import './components/styles/app.scss';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'Java', body: 'Description' },
    { id: 3, title: 'Phyton', body: 'Description' }
  ]);
  const [seletctedSort, setSelectedSort] = useState('');

  const sortPost = sort => {
    setSelectedSort(sort);
    setPosts([...posts].sort( (a, b) => a[sort].localeCompare(b[sort])))
   }


  const addNewPost = newPost => {
    setPosts([...posts, newPost])
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm createPost={addNewPost} />
      <MySelect
        onChange={sortPost}
        defaultValue="Sort of..."
        option={[
          {value: 'title', name: 'name'},
          {value: 'body', name: 'description'}
        ]}
      />
      {posts.length !== 0 ?
        <PostList removePost={removePost} posts={posts} title='Список постов 1' /> :
        <div>
          <h1>
            Posts is not defined
          </h1>
        </div>
      }
    </div>
  );
}

export default App;
