import { Component } from "react";
import check from './check.jpg'

export class TodoList extends Component {
    state= {
        userInput: "",
        todoList: []
    }
onChangeEvent(e) {
    this.setState ({userInput: e})
}
addItem(input) {
    if (input ==="") {
alert("Please enter an item")
    } else {
    let listArray=this.state.todoList;
    listArray.push(input);
    this.setState({todoList: listArray, userInput: ""})
}}
crossedWord(event) {
    const li=event.target;
    li.classList.toggle('crossed');
}
deleteItem() {
    let listArray=this.state.todoList;
    listArray=[];
    this.setState({todoList: listArray})
}
onFormSubmit(e) {
    e.preventDefault()
}
render() {
    return (
<div>
    <form onSubmit={this.onFormSubmit}>
    <div className="container">
    <input type="text" 
    placeholder="What do you want to do?"
    onChange={(e) => {this.onChangeEvent(e.target.value)}}
    value={this.state.userInput}/>
    </div>
    <div className="container">
    <button onClick={()=>this.addItem(this.state.userInput)} className="btn add">Add</button>
    </div>
    <ul>
        {this.state.todoList.map((item, index)=> (
           <li onClick={this.crossedWord} key={index}>
            <img src={check} width="20px" alt="check"/>
            {item}</li> 
       ))}
           </ul>
    <div className="container">
           <button onClick={()=> this.deleteItem()} className="btn delete">Delete</button>
</div>
</form>
</div>
    )
}
}