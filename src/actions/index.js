export const PLUS_NUM = "PLUS_NUM"
export const MINUS_NUM = "MINUS_NUM"
export const NUM_INPUT = "NUM_INPUT"
export const CLEAR_INPUT = "CLEAR_INPUT"

export const plusNum = (inputValue, resultValue) => {
	return {
		type: PLUS_NUM,
		inputValue: inputValue,
		resultValue: resultValue,
	}
}

export const minusNum = (inputValue, resultValue) => {
	return {
		type: MINUS_NUM,
		inputValue:inputValue,
		resultValue: resultValue,
	}
}

export const numInput = (inputValue, number) => {
	return {
		type: NUM_INPUT,
		inputValue: inputValue,
		number: number
	}
}

export const clearInput = () => {
	return {
		type: CLEAR_INPUT
	}
}