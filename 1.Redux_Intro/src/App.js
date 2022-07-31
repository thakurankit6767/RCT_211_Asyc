import logo from './logo.svg';
import './App.css';
import {store} from "./redux/store"
import { useState } from 'react';
import {handleIncrement} from "./redux/Action"
import {handleDecrement} from "./redux/Action"
function App() {
  const {counter}=store.getState()
  const {dispatch}=store
  const[data,setData]=useState(0)

 
  store.subscribe(()=>{
    setData((prev)=>
      prev+1
    )

  })

  return (
    <div className="App">
    <h1>counter:{counter}</h1>
    <button onClick={()=>dispatch(handleIncrement())}>increment</button>
    <button onClick={()=>dispatch(handleDecrement())}>decrement</button>
      
    </div>
  );
}

export default App;
