import { useState } from 'react';
import './App.css';

function App() {
  const [inputList, setInputList] = useState("");

  const itemEvent = (event) => {
    event.preventDefault()
    setInputList(event.target.value)
  };



  return (
    <>
    <div className="main-div">
    <div className="center-div">
      <br />
      <h1>ToDoList</h1>
      <input type="text" placeholder = "Add a item" onChange={itemEvent}/>
      
      <ol>
        <li>{inputList}</li>
      </ol>
    </div>
    </div>
    </>
  );
}

export default App;
