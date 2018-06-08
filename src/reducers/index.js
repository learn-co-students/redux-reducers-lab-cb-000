import Ingredient from '../components/ingredient'
import {addIngredient} from '../actions/index'
import {removeIngredient} from '../actions/index'

export default function ingredientReducer(state=[], action) {
  switch(action.type){
    case 'ADD_INGREDIENT':
      return [
        ...state,
        action.payload
      ]

    case 'REMOVE_INGREDIENT':
      return state.filter(ingredient =>
          ingredient !== action.payload
      )

    default:
      return state
    }
}
