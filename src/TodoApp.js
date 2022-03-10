import { todoReducer } from './helpers/todoReducer';
import { useReducer } from 'react';
import './TodoApp.css';

const InitialState = [{
  id: new Date().getTime(),
  desc: 'Learn React.js',
  done: false,
}];

function TodoApp() {

  const [ todos, dispatch ] = useReducer(todoReducer, InitialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      desc: 'Learn Node.js',
      done: false,
    }
    const action = {
      type: 'ADD',
      payload: newTodo
    }
    dispatch(action);
  }


  return (
    <>
      <h1>Todo App: {todos.length}</h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <ul className='list-group list-group-flush'>
            {
              todos.map( (todo, index) => (
                <li 
                  key={todo.id}
                  className='list-group-item'
                >
                  <p className='text-center'>{index + 1} - {todo.desc}</p>
                  <button
                    className='btn btn-danger'
                  >
                    Delete
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='col-5'>
          <h4>Add ToDo</h4>
          <hr />
          <form onSubmit={handleSubmit} >
            <input 
              className='form-control mb-3'
              type='text'
              name='description'
              placeholder='Learn...'
              autocompleted='off'
            />
            <div className='d-grid gap-2'>
              <button
                className='btn btn-outline-primary'
                type="submit"
                >
                Add ToDo
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default TodoApp;
