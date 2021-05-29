import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChage, reset] = useForm({
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    handleAddTodo(newTodo);
    reset();
  };

  return (
    <div>
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
  );
};
