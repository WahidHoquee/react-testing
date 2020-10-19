import React, { useState } from 'react';
import {useDispatch} from 'react-redux';

import { saveComment } from '../reducers/comments'

const CommentBox = () => {
  const [ value, setValue ] = useState('');
  const dispatch = useDispatch();

  const textAreaChangeHandler = (e) => {
    setValue(e.target.value)
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(saveComment(value));
    
    setValue('')
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <h4>Add a Comment</h4>
      <textarea onChange={textAreaChangeHandler} value={value}/>
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  )
}

export default CommentBox
