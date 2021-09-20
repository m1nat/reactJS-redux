import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({createPost}) => {

  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now()
    }
    createPost(newPost);
    setPost({ title: '', body: '' })
  }


  return (
    <div>
      <form>
        <MyInput
          value={post.title}
          type='text'
          placeholder='name of post'
          onChange={e => setPost({ ...post, title: e.target.value })}
        />

        <MyInput
          value={post.body}
          type='text'
          placeholder='descripion of post'
          onChange={e => setPost({ ...post, body: e.target.value })}
        />
        {/* <MyInput
          type='text'
          placeholder='descripion of post'
          ref = {inputValueRef}
        /> */}
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
    </div>
  )
}

export default PostForm;