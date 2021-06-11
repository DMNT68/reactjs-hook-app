import React from 'react';
import { shallow } from 'enzyme';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
import { MultipleCustomHokks } from '../../../components/03-examples/MultipleCustomHokks';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas en <MultipleCustomHokks />', () => {

    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    });

    
    test('debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHokks /> );
        expect( wrapper ).toMatchSnapshot();
        
    })

    test('should debe de mostrar la información', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Fernando',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHokks /> );

        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('.mb-3').text().trim() ).toBe( 'Hola Mundo' );
        expect( wrapper.find('footer').text().trim() ).toBe( 'Fernando' );

    })
    
    

})