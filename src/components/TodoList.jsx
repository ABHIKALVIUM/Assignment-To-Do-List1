import React from "react";
const TodoList=(props)=>{
    let {handleDelete,handleEdit,todo}=props;
    return(
        <div className="container">
            {todo.map((ele,index)=>{
                return(
                    <div key={index} className="todo-box">
                        <input className="input" type="text" value={ele} onChange={(event)=>handleEdit(event,index)}/>
                        <button className="btn" onClick={()=>handleDelete(index)}>Delete Item</button>
        </div>
            )
        })}
    </div>
    )
}
export default TodoList;