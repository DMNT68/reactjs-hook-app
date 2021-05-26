import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';

const initialState =[{
    id: new Date().getTime(),
    desc: 'Aprender react',
    done: false
}];

export const TodoApp = () => {

    const [todos] = useReducer(todoReducer, initialState)

    return (
        <div>
            <h1>TODO APP</h1>
            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Hola de nuevo</li>
            </ul>
        </div>
    )
}
