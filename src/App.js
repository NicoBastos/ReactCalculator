import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Display from './components/Display/Display';

function App() {
  const initialState = {
    totalValue: "",
    currentNumber: "",
    nextNumber: "",
    operation: ""
  }
  const [numbers, setNumbers] = useState({...initialState})

  const [displayValue, setDisplayValue] = useState(" ");
  
  const numberClicked = (value) => {
    const newState = {...numbers};
    const operating = newState.operation !== "";
    if(operating){
      newState.nextNumber += value;
      setNumbers(newState);
      setDisplayValue(newState.nextNumber);
    }else{
      console.log("else");
      newState.currentNumber += value;
      setNumbers(newState);
      setDisplayValue(newState.currentNumber);
    }
  }

  const operationClicked = (value) => {
    const newState = {...numbers};
    newState.operation = value;
    setDisplayValue("")
    setNumbers(newState);
  }

  const calculate = () => {
    let newState = {...numbers};
    let total;
    if(numbers.operation === "+"){
      total = Number(numbers.currentNumber) + Number(numbers.nextNumber);
    }
    if(numbers.operation === "-"){
      total = Number(numbers.currentNumber) - Number(numbers.nextNumber);
    }
    if(numbers.operation === "/"){
      total = Number(numbers.currentNumber) / Number(numbers.nextNumber);
    }
    if(numbers.operation === "*"){
      total = Number(numbers.currentNumber) * Number(numbers.nextNumber);
    }
    newState = {...initialState};
    newState.currentNumber = total;
    setNumbers(newState);
    setDisplayValue(total);
  }
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Display value={displayValue}/>
        <div className="row">
          <Button onPress={numberClicked}>7</Button>
          <Button onPress={numberClicked}>8</Button>
          <Button onPress={numberClicked}>9</Button>
          <Button onPress={operationClicked}>/</Button>
        </div>
        <div className="row">
          <Button onPress={numberClicked}>4</Button>
          <Button onPress={numberClicked}>5</Button>
          <Button onPress={numberClicked}>6</Button>
          <Button onPress={operationClicked} >*</Button>
        </div>
        <div className="row">
          <Button onPress={numberClicked}>1</Button>
          <Button onPress={numberClicked}>2</Button>
          <Button onPress={numberClicked}>3</Button>
          <Button onPress={operationClicked}>+</Button>
        </div>
        <div className="row">
          <Button onPress={numberClicked}>.</Button>
          <Button onPress={numberClicked}>0</Button>
          <Button onPress={calculate}>=</Button>
          <Button onPress={operationClicked}>-</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
