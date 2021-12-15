import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {plusNum} from "../actions"

const PlusBtn = () => {
	const dispatch = useDispatch()
	const calculator = useSelector(state => state.calculators)
	return (
		<button
			onClick={() => {
				let inputValueTag = document.getElementsByClassName("inputValue")[0];
				let resultValueTag = document.getElementsByClassName("resultValue")[0]
				let inputValue = inputValueTag.innerText
				let resultValue = resultValueTag.innerText
				dispatch(plusNum(inputValue, resultValue))
				resultValueTag.innerText = calculator.resultValue
			}}
		>
			+
		</button>
	)
}

export default PlusBtn;