import { shallow } from 'enzyme';
import React from 'react';
import { TodoList } from '../../../components/08-reducer/TodoList';
import { demoTodos } from '../../fixtures/todoDemos';

describe('Pruebas en <TodoList />', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(<TodoList todos={demoTodos} handleDelete={handleDelete} handleToggle={handleToggle} />)
    
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de tener dos <TodoItem />', () => {
        console.log(wrapper.html())
      expect(wrapper.find('TodoItem').length).toBe(demoTodos.length);
      expect(wrapper.find('TodoItem').at(0).prop('handleDelete').toEqual(expect.any(Function)))
    });
    
    
})
