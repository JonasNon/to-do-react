import React, { useState } from "react";

function TodoCard (props) {

  const {title, index, clickToRemove, clickToEdit, selectedItem} = props

  const [color, changeColor] = useState("#2dc937")
//	#2dc937, 	#e7b416, 	#cc3232
  return (
  <div style={{backgroundColor: color}}>
    <li>{index == selectedItem ? <input type="text" placeholder={title} onSubmit={clickToEdit(index)}></input> : title}
      <div>
      <button onClick={() => clickToRemove(index)}>Delete me!</button>
      <button onClick={() => clickToEdit(index)}>Edit me!</button>
      </div>
    </li>
    
  </div>

  )
}

export default TodoCard