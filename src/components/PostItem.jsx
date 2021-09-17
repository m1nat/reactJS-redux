import React from "react";
import './styles/app.scss';

const PostItem = props => {
  return (
      <div className="post">
        <div className="post__content">
          <h3>{props.number} {props.post.title}</h3>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className="post__btns">
          <button>Delete</button>
        </div>
      </div>
  )
}

export default PostItem;