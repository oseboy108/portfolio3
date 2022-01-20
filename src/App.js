import { useState } from 'react';
import './index.css';





function App() {
  const [calc, setCalc] = useState("");
  const [setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.' ];

  // to make the operators not double
  const updateCalc = value => {
    if (
      // eslint-disable-next-line no-mixed-operators
      ops.includes(value) && calc === ' ' ||
      // eslint-disable-next-line no-mixed-operators
      ops.includes(value) && ops.includes(calc.slice(-1)
      )
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      // eslint-disable-next-line no-eval
      setResult(eval(calc + value).toString());
    }
  }
// for equal buttons
  const calculate = () => {
    // eslint-disable-next-line no-eval
    setCalc(eval(calc).toString());
  }

  // for delete button

  const deleteLast = () => {
    if (calc ===' ') {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  }
 //For All clear button
  const actionClear = () => {
    setCalc('');
  };

return (
    <div className="calculator-grid">
      <div className="output">
        
        <div className="current-operand">{calc || "0" }</div>
      </div>

      <button onClick={actionClear} className="span-two">AC</button>
      <button onClick={deleteLast}>DEL</button>
      <button onClick={()=>updateCalc('/')}>/</button>
      <button onClick={()=>updateCalc('1')}>1</button>
      <button onClick={()=>updateCalc('2')}>2</button>
      <button onClick={()=>updateCalc('3')}>3</button>
      <button onClick={()=>updateCalc('*')}>*</button>
      <button onClick={()=>updateCalc('4')}>4</button>
      <button onClick={()=>updateCalc('5')}>5</button>
      <button onClick={()=>updateCalc('6')}>6</button>
      <button onClick={()=>updateCalc('+')}>+</button>
      <button onClick={()=>updateCalc('7')}>7</button>
      <button onClick={()=>updateCalc('8')}>8</button>
      <button onClick={()=>updateCalc('9')}>9</button>
      <button onClick={()=>updateCalc('-')}>-</button>
      <button onClick={()=>updateCalc('.')}>.</button>
      <button onClick={()=>updateCalc('0')}>0</button>
    
      <button onClick={calculate} className="span-two">=</button>
    </div>
);
}

export default App;
