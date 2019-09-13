import React, { Component } from "react";
import "./Todolist.css";
import Todoitem from "../Todoitem/Todoitem";
class Todolist extends Component {
  render() {
    const { items,clearlist,handelDelete,handelEdit } = this.props
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">ToDo List</h3>
        {items.map(item=>{return(<Todoitem key={item.id}
         title={item.title}
         handelDelete={()=>handelDelete(item.id)}
         handelEdit={()=>handelEdit(item.id)}
         />)})}
        
        <button
          type="button"
          className=" btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearlist}
        >
          Clear list
        </button>
      </ul>
    );
  }
}

export default Todolist;
