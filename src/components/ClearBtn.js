import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {clearInput} from "../actions"

const ClearBtn = () => {
	const dispatch = useDispatch()
	const calculator = useSelector(state => state.calculators)
	return (
		<button
			onClick={() => {
				let inputValueTag = document.getElementsByClassName("inputValue")[0];
				let resultValueTag = document.getElementsByClassName("resultValue")[0];
				dispatch(clearInput())
				inputValueTag.innerText = 0
				resultValueTag.innerText = 0
			}}
		>
		C
		</button>
	)
}

export default ClearBtn;