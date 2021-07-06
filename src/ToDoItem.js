import React from "react"
import {RiDeleteBin6Line } from "@react-icons/all-files/ri/RiDeleteBin6Line";
import {BiEditAlt } from "@react-icons/all-files/bi/BiEditAlt";
import { AiFillCloseCircle } from '@react-icons/all-files/ai/AiFillCloseCircle';
import { IoIosCheckmarkCircle } from '@react-icons/all-files/io/IoIosCheckmarkCircle';


const ToDoList = (props) => {
    const editing = props.editing;
    const toggleEditing = props.toggleEditing;
    let editButtons = null;
    if (editing) {
      editButtons = (
        <>
          <button 
            className="edit-button" 
            onClick={() =>{
              const newValue = document.querySelector(`[data-id="${props.id}"]`)?.value;
              if (newValue?.trim()?.length > 0) {
                props.onEdit(props.id, newValue);
                toggleEditing(props.id);                
              }
            }}>
              <IoIosCheckmarkCircle />
          </button>
          <button 
            className="edit-button" 
            onClick={() =>{toggleEditing(props.id)}}>
              <AiFillCloseCircle />
          </button> 
        </>
      );
    } else {
      editButtons = (
        <button 
          className="edit-button" 
          onClick={() =>{toggleEditing(props.id)}}>
            <BiEditAlt />
        </button>
      );
    }
    return (
      <div className="todo-style">
        { editing ? <input type="text" data-id={props.id} /> : <li> {props.text} </li> }
          <button 
            className="delete-button" 
            onClick={() =>{props.onDelete(props.id)}}>
              <RiDeleteBin6Line />
          </button>
          {editButtons}
      </div>
    )
    
}

export default ToDoList;
