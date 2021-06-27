import React from "react"

const ToDoList = (props) => {
    return (
    <>
    <div className="todo-style">
     <li> {props.text} </li>
    <button className="button2" onClick={() =>{props.onSelect(props.id)}}>x</button> 
    </div>
    </>)
    
}

export default ToDoList;
