import { render, screen } from '@testing-library/react';
import { UserContext } from '../../09-useContext/context/UserContext';
import { HomePage } from '../../09-useContext/HomePage';


describe('Pruebas en <HomePage/>', () => { 

    const user = {
        id: 1,
        name: 'Jesus'
    }
   
    test('debe de mostrar el componente sin el usuario', () => { 
       
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage/>    
            </UserContext.Provider>         
        );
        // screen.debug();
        const preTag = screen.getByLabelText('pre') // aria-label
        expect(preTag.innerHTML).toBe('null');

    });
    test('debe de mostrar el componente CON el usuario', () => { 
       
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage/>    
            </UserContext.Provider>         
        );
        //  screen.debug();
        const preTag = screen.getByLabelText('pre') // aria-label
        expect(preTag.innerHTML).not.toBe('null');
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(`${user.id}`);

        const nameUser = screen.getByLabelText('name');
        expect(nameUser.innerHTML).toBe( user.name);

    });

    
});