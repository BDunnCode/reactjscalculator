import "./styles.css"

function App() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand"></div>
        <div className="current-operand"></div>
    </div>
    <button className="span-two all-clear">AC</button>
    <button className="delete">DEL</button>
    <button className="÷">÷</button>
    <button className="1">1</button>
    <button className="2">2</button>
    <button className="3">3</button>
    <button className="*">*</button>
    <button className="4">4</button>
    <button className="5">5</button>
    <button className="6">6</button>
    <button className="+">+</button>
    <button className="7">7</button>
    <button className="8">8</button>
    <button className="9">9</button>
    <button className="-">-</button>
    <button className=".">.</button>
    <button className="0">0</button>
    <button className="span-two equal">=</button>
    </div>
  );
}

export default App;
