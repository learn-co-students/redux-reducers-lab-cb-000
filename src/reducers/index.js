export default function ingredientReducer(state = [], action) {
	switch (action.type) {
		case 'ADD_INGREDIENT':
			return [
				...state,
					action.payload
				]
		case 'REMOVE_INGREDIENT':
		let newState = [];
			state.map((ingredient) => {
				if(ingredient !== action.payload){
					newState.push(ingredient);
				}
			})
			return newState;
		default:
			return state;
	}


}
