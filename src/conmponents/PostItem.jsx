import React from 'react'

export function PostItem(props) {
	

	return (
    <div className='post'>
      <div className='post__content'>
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className='post__btns'>
        <button>Remove</button>
      </div>
    </div>
  );
}
