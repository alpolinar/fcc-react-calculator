import { useSelector, useDispatch } from 'react-redux'
import { selectFormula, selectOutput } from './app/calculatorSlice'
import { addToFormula, clearCalculator, calculate, addToOutput } from './app/calculatorSlice'

function App() {
  const formula = useSelector(selectFormula)
  const output = useSelector(selectOutput)

  const dispatch = useDispatch()

  return (
    <div id="app">
      <div>
        <div className="calculator">
          <div className="formulaScreen">{formula}</div>
          <div className="outputScreen" id="display">{output}</div>
          <div>
            <button className="jumbo" id="clear" style={{ background: "rgb(172, 57, 57)" }} value="AC" onClick={() => dispatch(clearCalculator())}>AC</button>
            <button id="divide" style={{ background: "rgb(102, 102, 102)" }} value="/" onClick={(e) => dispatch(addToFormula(e.target.value))}>/</button>
            <button id="multiply" style={{ background: "rgb(102, 102, 102)" }} value="x" onClick={(e) => dispatch(addToFormula(e.target.value))}>x</button>
            <button id="seven" value="7" onClick={(e) => dispatch(addToOutput(e.target.value))}>7</button>
            <button id="eight" value="8" onClick={(e) => dispatch(addToOutput(e.target.value))}>8</button>
            <button id="nine" value="9" onClick={(e) => dispatch(addToOutput(e.target.value))}>9</button>
            <button id="subtract" style={{ background: "rgb(102, 102, 102)" }} value="-" onClick={(e) => dispatch(addToFormula(e.target.value))}>-</button>
            <button id="four" value="4" onClick={(e) => dispatch(addToOutput(e.target.value))}>4</button>
            <button id="five" value="5" onClick={(e) => dispatch(addToOutput(e.target.value))}>5</button>
            <button id="six" value="6" onClick={(e) => dispatch(addToOutput(e.target.value))}>6</button>
            <button id="add" style={{ background: "rgb(102, 102, 102)" }} value="+" onClick={(e) => dispatch(addToFormula(e.target.value))}>+</button>
            <button id="one" value="1" onClick={(e) => dispatch(addToOutput(e.target.value))}>1</button>
            <button id="two" value="2" onClick={(e) => dispatch(addToOutput(e.target.value))}>2</button>
            <button id="three" value="3" onClick={(e) => dispatch(addToOutput(e.target.value))}>3</button>
            <button className="jumbo" id="zero" value="0" onClick={(e) => dispatch(addToFormula(e.target.value))}>0</button>
            <button id="decimal" value="." onClick={(e) => dispatch(addToOutput(e.target.value))}>.</button>
            <button id="equals" style={{ background: "rgb(0, 68, 102)", position: "absolute", height: '130px', bottom: '5px', }} value="=" onClick={() => dispatch(calculate())}>=</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
