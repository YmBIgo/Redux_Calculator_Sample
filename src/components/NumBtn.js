import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {numInput} from "../actions"

const NumBtn = ({number}) => {
	const dispatch = useDispatch()
	const calculator = useSelector(state => state.calculators)
	return(
		<button
			onClick={() => {
				let inputValueTag = document.getElementsByClassName("inputValue")[0]
				let inputValue = inputValueTag.innerText
				dispatch(numInput(inputValue, number));
				inputValueTag.innerText = calculator.inputValue
			}}
		>
			{number}
		</button>
	)
}

export default NumBtn;