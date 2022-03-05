
export const todoReducer = (state = [], action) => {

  switch (action.type) {
    case action.type === 'ADD':
      return [...state, action.payload];
    case action.type === 'DELETE':
      return [...state, action.payload];
    case action.type === 'UPDATE':
      return [...state, action.payload];
    default:
      return state
  }

};