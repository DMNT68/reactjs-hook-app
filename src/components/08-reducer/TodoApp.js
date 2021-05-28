import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';
import { useForm } from '../../hooks/useForm';

const init = () => {

  return JSON.parse(localStorage.getItem('todos')) || [];

}

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [ { description }, handleInputChage, reset ] = useForm({
    description: '',
  });

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId,
    };
    dispatch(action);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    const action = {
      type: 'add',
      payload: newTodo,
    };
    dispatch(action);
    reset();
  };

  return (
    <div>
      <h1>TODO APP ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                <p className="text-center">
                  {i + 1}. {todo.desc}{' '}
                </p>
                <button className="btn btn-danger" onClick={()=> handleDelete(todo.id)} >Borrar</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input value={description} onChange={handleInputChage} className="form-control" type="text" name="description" placeholder="Aprender..." autoComplete="off" />
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-outline-primary mt-4">
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
