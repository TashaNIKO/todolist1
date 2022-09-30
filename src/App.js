
import './App.css';
import image from './todo.jpg';
import imageTwo from './list.jpg';
import { TodoList } from './TodoList';

function App() {
  return (
    <div className='app'>
      <div className='container'>
      <img src={ image } width="350px" alt="todo"/>
      </div>
      <div className='container'>
      <h1>To Do List</h1>
      </div>
      <TodoList/>
      <div className='container'>
      <img src={ imageTwo } width="350px" height={"220px"} alt="list"/>
      </div>
      </div>
  );
}

export default App;
