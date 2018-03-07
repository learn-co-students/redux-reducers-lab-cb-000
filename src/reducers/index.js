export default function ingredientReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return [...state, action.payload]
    case 'REMOVE_INGREDIENT':
      var s = []
      state.map(i => {
        if(i !== action.payload){
          s.push(i)
        }
      })
      return s;
    default:
     return state
  }
}
