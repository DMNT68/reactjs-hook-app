import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'Andrés',
        email:'andressalgado41@gmail.com'
    };

    test('debe de regresar un formulario por defecto', () => {
        const {result} = renderHook(()=> useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;
        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('debe de cambiar el valor del formulario', () => {
        const {result} = renderHook(()=> useForm(initialForm));
        const [, handleInputChange] = result.current;

        act(()=> {
            handleInputChange({
                target:{
                    name:'name',
                    value: 'Arandana'
                }
            })
        })

        const [values] = result.current;
        expect(values).toEqual({...initialForm, name: 'Arandana'});
    });

    test('debe de restablcer el formulario con reset', () => {
        const {result} = renderHook(()=> useForm(initialForm));
        const [, handleInputChange, reset] = result.current;

        act(()=> {
            handleInputChange({
                target:{
                    name:'name',
                    value: 'Jorge'
                }
            });
            reset();

        })

        const [values] = result.current;
        expect(values).toEqual(initialForm);
    });
    
});
