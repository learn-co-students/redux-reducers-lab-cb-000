export default function ingredientReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return [
        ...state,
        action.payload
      ]
    case 'REMOVE_INGREDIENT':
      const newList = state.filter(ingredient => ingredient !== action.payload)
      return newList
    default:
      return state
  }
}
