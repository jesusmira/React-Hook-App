import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks";
import { useCounter, useFetch } from "../../hooks";



jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCounter");


describe('Pruebas en MultipleCustomHooks', () => {
    
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(()=> {
        jest.clearAllMocks()
    });
   
    test('Debe de momstrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
       
        render(<MultipleCustomHooks/>);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole('button',{ name:'Next Quote'});
        expect(nextButton.disabled).toBeTruthy();

        // screen.debug();

    });


    test('Debe de mostrar un Quote ', () => { 
       
        
        useFetch.mockReturnValue({
            data: [{author:'Jesús', quote:'Hola mundo'}],
            isLoading: false,
            hasError: null
        });
        
        render(<MultipleCustomHooks/>);
        // screen.debug();

        expect(screen.getByText('Hola mundo')).toBeTruthy();
        expect(screen.getByText('Jesús')).toBeTruthy();

        const nextButton = screen.getByRole('button',{ name:'Next Quote'});
        expect(nextButton.disabled).toBeFalsy();

    });

    test('Debe de llamar a la función de incrementar', () => { 
      
        useFetch.mockReturnValue({
            data: [{author:'Jesús', quote:'Hola mundo'}],
            isLoading: false,
            hasError: null
        });     

        render(<MultipleCustomHooks/>);

        const nextButton = screen.getByRole('button',{ name:'Next Quote'});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();

    });
});