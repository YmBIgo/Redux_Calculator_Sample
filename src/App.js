import {useDispatch, useSelector} from "react-redux"
import NumBtn from "./components/NumBtn"
import PlusBtn from "./components/PlusBtn"
import './App.css';

function App() {

  const dispatch = useDispatch()
  const calculator = useSelector(state => state.calculators)

  return (
    <div className="App">
      <div>
        <span>InputValue</span>
        <p className="inputValue">{calculator.inputValue}</p>
        <span>ResultValue</span>
        <p className="resultValue">{calculator.resultValue}</p>
      </div>
      <div>
        <NumBtn number="1" />
        <NumBtn number="2" />
        <NumBtn number="3" />
      </div>
      <div>
        <NumBtn number="4" />
        <NumBtn number="5" />
        <NumBtn number="6" />
      </div>
      <div>
        <NumBtn number="7" />
        <NumBtn number="8" />
        <NumBtn number="9" />
      </div>
      <div>
        <NumBtn number="0" />
        <PlusBtn />
      </div>
    </div>
  );
}

export default App;
