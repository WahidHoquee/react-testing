import commentsReducer from '../comments'
import { saveComment } from '../comments'

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: 'SAVE_COMMENT',
    payload: 'New Comment'
  }

  const newState = commentsReducer([], action);
  expect(newState).toEqual(['New Comment'])
})

it('doesnt show errors on unknown action type', () => {
  const newState = commentsReducer([], {});
  expect(newState).toEqual([])
})




//? Grouping each action creators test into each describe method

describe('saveComment', () => {
  it('has the correct type', () => {
    const action = saveComment();
    expect(action.type).toEqual('SAVE_COMMENT')
  })
  it('has the correct payload', () => {
    const action = saveComment('Hello');
    expect(action.payload).toEqual('Hello')
  })
})