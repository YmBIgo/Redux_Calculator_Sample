export const PLUS_NUM = "PLUS_NUM"
export const NUM_INPUT = "NUM_INPUT"

export const plusNum = (inputValue, resultValue) => {
	return {
		type: PLUS_NUM,
		inputValue: inputValue,
		resultValue: resultValue,
		showResult: true
	}
}

export const numInput = (inputValue, number) => {
	return {
		type: NUM_INPUT,
		inputValue: inputValue,
		number: number
	}
}