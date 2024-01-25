// import React from "react";
import { Component } from "react";
class Todo extends Component{
    constructor(props){
        super(props);

        this.state={
            task:"",
            todo:[],
        }

    }

    handleUpdate=(e)=>{
        this.setState({
            task:e.target.value
        })
    }

    handleAdd=()=>{
        // this.state.todo.push(this.state.task);
        this.setState({
            todo:[...this.state.todo,this.state.task],
            task: "",
        })
        console.log(this.state)
    }

    handleEdit=(e,i)=>{
        let newTodo = this.state.todo.map((ele, index)=>{
            if(index==i){
                return e.target.value;
            }
            else{
                return ele
            }
        });

        e.target.value

        this.setState({
            todo:newTodo
        })
    }

    handleDelete=(i)=>{
        let newTodo = this.state.todo.filter((ele, index)=>{
            if(index!==i){
                return ele
            }
        })
        this.setState({
            todo: newTodo
        })
    }


    render(){
        return(
            <>
            <input type="text" value={this.state.task} onChange={this.handleUpdate}/>
            <button onClick={this.handleAdd} >Add Item</button>
            <p>{this.state.task}</p>
            <div className="container">
                {this.state.todo.length? this.state.todo.map((ele, index)=>{
                return(<div key={index}>
                    <input type="text" value={ele} onChange={(event)=>this.handleEdit(event, index)} />
                    <button onClick={()=>this.handleDelete(index)}>Delete Item</button>
                </div>)
                }):""}
            </div>
            </>

        )
    }
}

export default Todo;