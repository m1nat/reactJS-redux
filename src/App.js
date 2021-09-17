import React, { useState } from 'react';
import PostItem from './components/PostItem';
// import Counter from './components/Counter';
import './components/styles/app.scss';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'Java', body: 'Description'},
    {id: 3, title: 'Phyton', body: 'Description'}
  ])

  return (
    <div className="App">
      <h1>Список постов</h1>
      {posts.map( post => <PostItem post={post} key={post.id}/>)}
    </div>
  );
}

export default App;
