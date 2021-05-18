import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log('hey!');
  }, []);

  useEffect(() => {
    // console.log('formState cambio');
  }, [formState]);

  useEffect(() => {
    // console.log('email cambio');
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="input-group mb-3">
        <input type="text" name="name" className="form-control" placeholder="Nombre" autoComplete="off" value={name} onChange={handleInputChange} />
      </div>
      <div className="input-group mb-3">
        <input type="email" name="email" className="form-control" placeholder="Email" autoComplete="off" value={email} onChange={handleInputChange} />
      </div>

      {name === '123' && <Message />}
    </>
  );
};
