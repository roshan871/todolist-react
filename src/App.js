import { useState } from 'react';
import './App.css';
import ToDoItem from './ToDoItem';
import {RiTodoFill } from "@react-icons/all-files/ri/RiTodoFill";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
 

  const itemEvent = (event) => {
    event.preventDefault()
    setInputValue(event.target.value)
  };
  const addToList = () =>{
    if(inputValue?.trim()?.length >0) {
      setItems( (oldItems) => {
        return [...oldItems, {item: inputValue, editing: false}]
      })
      setInputValue("")
    }
  }
  
  const deleteItems = (id) => {
    setItems( (oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
       
      });
    });
  }

  const editItems = (id, newText) =>{
    setItems( (oldItems) => {
      return oldItems.map((arrElem, index) => {
        const { editing } = arrElem;
        return index === id ? {item: newText, editing} : arrElem;
      });
    });
  }

  const toggleEditingState = (id) => {
    setItems( (oldItems) => {
      return oldItems.map((arrElem, index) => {
        if (index === id) {
          return {
            item: arrElem.item, 
            editing: !arrElem.editing
          }
        } else {
          return arrElem;
        }
      });
    });
  }
  

  return (
    <>
    <div className="main-div">
    <div className="center-div">
      <br />
      <h1><RiTodoFill />ToDoList</h1>
      <input 
        type="text"
        value={inputValue}
        placeholder = "Add a item"
        onChange={itemEvent} 
       />
      <button className="add-to-list-button" onClick={addToList}> + </button>
      <ol>
      
        {
          items.map( ({item: itemVal, editing}, index) => {
            return (
              <ToDoItem 
                key={`${index}-${itemVal}`}
                id={index}
                text={itemVal}
                onDelete={deleteItems}
                onEdit={editItems}
                editing={editing}
                toggleEditing={toggleEditingState}
              />
            )
          })
        }
      </ol>
    </div>
    </div>
    </>
  );
}

export default App;
