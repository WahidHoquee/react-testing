export function saveComment(comment){
  return {
    type: 'SAVE_COMMENT',
    payload: comment
  }
} 
export default (state = [], action) => {
  switch (action.type) {
    case 'SAVE_COMMENT':
      return [...state, action.payload]
    default:
      return state;
  }
}