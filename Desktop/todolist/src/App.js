import React from "react";
import Todolist from "./Components/Todolist/Todolist";
import Todoinput from "./Components/Todoinput/Todoinput";
import "./App.css";
import uuid from "uuid";
class App extends React.Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };
  handelChange = e => {
    this.setState({ item: e.target.value });
  };
  handelSubmit = e => {
    e.preventDefault();
    const newitem = {
      id: this.state.id,
      title: this.state.item
    };
    console.log(newitem);
    const updateItem = [...this.state.items, newitem];
    this.setState({ items: updateItem, item: "", id: uuid(), editItem: false });
  };
  clearlist = () => {
    this.setState({ items: [] });
  };
  handelDelete = id => {
    const filtredItem = this.state.items.filter(item => item.id !== id);
    this.setState({ items: filtredItem });
  };
  handelEdit = id => {
    const filtredItem = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    console.log(selectedItem);
    this.setState({
      items: filtredItem,
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-8 mt-4">
            <Todolist
              items={this.state.items}
              clearlist={this.clearlist}
              handelDelete={this.handelDelete}
              handelEdit={this.handelEdit}
            />
            <h3 className="text-capitalize text-center">ToDo Input</h3>
            <Todoinput
              item={this.state.item}
              handelChange={this.handelChange}
              handelSubmit={this.handelSubmit}
              editItem={this.state.editItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
