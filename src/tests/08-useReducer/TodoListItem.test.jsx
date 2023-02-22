import { fireEvent, render, screen } from "@testing-library/react";
import { TodoListItem } from "../../08-useReducer/TodoListItem";


describe('Pruebas en <TodoListItem/>', () => { 
   
    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();
   
    beforeEach(()=> jest.clearAllMocks());

    test('debe de mostrar el Todo pendiente a completar', () => { 

        render(<TodoListItem todo={ todo } onDeleteTodo={ onDeleteTodoMock } onToggleTodo={ onToggleTodoMock}/>);
        const liElement = screen.getByRole('listitem');

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    
   });

    test('debe de mostrar el Todo completado', () => { 

        todo.done = true;
        render(<TodoListItem 
                    todo={ todo } 
                    onDeleteTodo={ onDeleteTodoMock } 
                    onToggleTodo={ onToggleTodoMock}/>
                );
                
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    
   });

   test('span debe de llamar al Toggle todo cuando se hace Click', () => { 
      
        render(<TodoListItem 
            todo={ todo } 
            onDeleteTodo={ onDeleteTodoMock } 
            onToggleTodo={ onToggleTodoMock}/>
        );

        const spanElement = screen.getByLabelText('span');

        fireEvent.click( spanElement);
        expect( onToggleTodoMock).toHaveBeenCalledWith( todo.id );

   });
   test('button debe de llamar el onDeleteTodo', () => { 
      
        render(<TodoListItem 
            todo={ todo } 
            onDeleteTodo={ onDeleteTodoMock } 
            onToggleTodo={ onToggleTodoMock}/>
        );

        const deleteButton = screen.getByRole('button');

        fireEvent.click( deleteButton );
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );

   });


});

