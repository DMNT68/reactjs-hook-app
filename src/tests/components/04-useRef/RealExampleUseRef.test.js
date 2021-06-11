import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleUseRef } from '../../../components/04-useRef/RealExampleUseRef';
import { MultipleCustomHokks } from '../../../components/03-examples/MultipleCustomHokks';
describe('Pruebas en <RealExampleUseRef />', () => {

    const wrapper = shallow( <RealExampleUseRef /> );
    test('debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHokks').exists()).toBe(false);
        
    });

    test('debe de mostrarse el componente <MultipleCustomHokks />', () => {
        
        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultipleCustomHokks').exists() ).toBe(true);
        
    });

});
