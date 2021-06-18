import { mount, shallow } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas en <HomeScreen/>', () => {

    const user = {
        name: 'Andrés',
        email: 'andressalgado41@gmail.com'
    };
    
    const wrapper = shallow(
        <UserContext.Provider value={{user}}>
            <HomeScreen/>
        </UserContext.Provider>
    )

   test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
   });
    
});
