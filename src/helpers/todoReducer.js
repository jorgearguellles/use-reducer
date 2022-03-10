
export const todoReducer = (state = [], action) => {

  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
      return [...state, action.payload];
    case 'UPDATE':
      return [...state, action.payload];
    default:
      return state
  }

};