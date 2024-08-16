import React, { useState } from "react";

const colorSelector = {
  backgroundColor : "#e7b416",
  position: "absolute",
  left: "-2vh",
  width: "5vw",
  height: "8vh",
  zIndex: "5"
}


function TodoCard (props) {

  const {title, index, clickToRemove, clickToEdit, selectedItem, handleChange, color} = props

//	#2dc937, 	#e7b416, 	#cc3232
  return (
  <div style={{backgroundColor: color, position: "relative", zIndex: "50"}}>
    {/* <div style={colorSelector}></div> */}
    <li>{index == selectedItem ? <input type="text" placeholder={title} onSubmit={clickToEdit(index)} onChange={handleChange}></input> : title}
      <div>
        <button onClick={() => clickToRemove(index)}>Delete me!</button>
        <button onClick={() => clickToEdit(index)}>Edit me!</button>
      </div>
    </li>
    
  </div>

  )
}

export default TodoCard