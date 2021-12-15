import {PLUS_NUM, NUM_INPUT, CLEAR_INPUT} from "../actions"

const initial_value = {resultValue: 0, inputValue: 0}

const calculators = (state=initial_value, action) => {
	switch(action.type){
		case PLUS_NUM:
			let inputValue = action.inputValue
			state.resultValue = parseInt(state.resultValue) + parseInt(inputValue)
			state.inputValue = 0
			console.log(state)
			return state
		case NUM_INPUT:
			let inputNumber = action.number
			state.inputValue = parseInt(state.inputValue) * 10 + parseInt(inputNumber)
			console.log(state)
			return state
		case CLEAR_INPUT:
			state.inputValue = 0
			state.resultValue = 0
			console.log(state)
			return state
		default:
			return state
	}
}

export default calculators