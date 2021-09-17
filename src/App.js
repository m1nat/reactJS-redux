import React, { useRef, useState } from 'react';
import PostList from './components/Post-list';
import MyButton from './components/UI/button/MyButton';
import PostItem from './components/PostItem';

import './components/styles/app.scss';
import MyInput from './components/UI/input/MyInput';

function App() {

  // const inputValueRef = useRef()
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'Java', body: 'Description' },
    { id: 3, title: 'Phyton', body: 'Description' }
  ])

  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({ title: '', body: '' })
  }


  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          type='text'
          placeholder='name of post'
          onChange={e => setPost({...post, title: e.target.value})}
        />

        <MyInput
          value={post.body}
          type='text'
          placeholder='descripion of post'
          onChange={e => setPost({...post, body: e.target.value})}
        />
        {/* <MyInput
          type='text'
          placeholder='descripion of post'
          ref = {inputValueRef}
        /> */}
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title='Список постов 1' />
    </div>
  );
}

export default App;
