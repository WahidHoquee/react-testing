import React, { useState } from 'react'

const CommentBox = () => {
  const [ value, setValue ] = useState('')

  const textAreaChangeHandler = (e) => {
    setValue(e.target.value)
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

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
