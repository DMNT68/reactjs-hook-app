import { mount, shallow } from 'enzyme';
import React from 'react';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <AppRouter/>', () => {

    const user = {
        name: 'Andrés',
        email: 'andressalgado41@gmail.com'
    };

    const wrapper = shallow(
    <UserContext.Provider value={{user}}>
        <AppRouter/>
    </UserContext.Provider>
    );
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
});
