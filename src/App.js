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
  
  const deleteItems = (id) => {
    setItems( (oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
       
      });
    });
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
          items.map( (itemVal, index) => {
            return <ToDoList 
            key={index}
            id={index}
            text = {itemVal}
            onSelect = {deleteItems} />
          })
        }
      </ol>
    </div>
    </div>
    </>
  );
}

export default App;
