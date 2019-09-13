import React, { Component } from "react";
import "./Todoinput.css";

class Todoinput extends Component {
  render() {
    const { item, handelChange, handelSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handelSubmit}>
          <div className="input-group">
            <div className="inout-group-prepend">
              <div className="inout-group-text bg-primary text-white">
                <i className="fas fa-user-plus fa-2x" />
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Add a new Todo item..."
              value={item}
              onChange={handelChange}
            />
          </div>
          <button
            type="submit"
            className={
              editItem
                ? "btn btn-block btn-success mt-3"
                : "btn btn-block btn-primary mt-3"
            }
          >
            {editItem ? "Edit Item" : "Add Item"}
          </button>
        </form>
      </div>
    );
  }
}

export default Todoinput;
