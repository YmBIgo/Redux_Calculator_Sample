import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {minusNum} from "../actions"

const MinusBtn = () => {
	const dispatch = useDispatch()
	let calculator = useSelector(state => state.calculators)
	return(
		<button
			onClick={() => {
				let inputValueTag = document.getElementsByClassName("inputValue")[0];
				let resultValueTag = document.getElementsByClassName("resultValue")[0];
				let inputValue = inputValueTag.innerText
				let resultValue = resultValueTag.innerText
				dispatch(minusNum(inputValue, resultValue))
				inputValueTag.innerText = 0
				resultValueTag.innerText = calculator.resultValue
			}}
		>
			-
		</button>
	)
}

export default MinusBtn;