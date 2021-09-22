import React, { useMemo, useRef, useState } from 'react';
import PostList from './components/Post-list';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

import './components/styles/app.scss';
import MyInput from './components/UI/input/MyInput';
import PostFilter from './components/PostFilter';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'Java', body: 'Description' },
    { id: 3, title: 'Phyton', body: 'Description' },
    { id: 4, title: 'C++', body: 'Description' },
    { id: 5, title: 'Go', body: 'Description' },
    { id: 6, title: 'Ruby', body: 'Description' }
  ]);

  const [filter, setFilter] = useState({
    sort: '',
    query: ''
  })


  const sortedPost = useMemo( () => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedArray = useMemo( () => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPost])

  const addNewPost = newPost => {
    setPosts([...posts, newPost])
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm createPost={addNewPost} />
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      {sortedAndSearchedArray.length !== 0 ?
        <PostList removePost={removePost} posts={sortedAndSearchedArray} title='Список постов 1' /> :
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
