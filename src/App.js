import { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    event.preventDefault()
    setInputList(event.target.value)
  };
  const listOfItems = () =>{
    if(inputList?.trim()?.length >0) {
      setItems( (oldItems) => {
        return [...oldItems, inputList]
      })
      setInputList("")

    }
  }



  return (
    <>
    <div className="main-div">
    <div className="center-div">
      <br />
      <h1>ToDoList</h1>
      <input 
      type="text"
      value={inputList}
      placeholder = "Add a item"
       onChange={itemEvent} 

       />
      <button className="button1" onClick={ listOfItems}> + </button>
      <ol>
        {
          items.map( (itemVal) => {
            return <ToDoList text = {itemVal} />
          })
        }
      </ol>
    </div>
    </div>
    </>
  );
}

export default App;
