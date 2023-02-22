import { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodo } from '../hooks';

export const TodoApp = () => {

  const {todos,TodosCount, pendingTodosCount,  handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

    return (
      <>
          <h1>TodoApp {TodosCount}, <small>pendientes: { pendingTodosCount }</small></h1>
          <hr />

            <div className="row">
              <div className="col-7">
                <TodoList 
                todos={todos} 
                onDeleteTodo={ handleDeleteTodo }
                onToggleTodo={ handleToggleTodo }/>     
              </div>
              <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd onNewTodo={ handleNewTodo }/>
              </div>
            </div>

      
      
      </>
    )
}
