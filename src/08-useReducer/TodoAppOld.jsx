import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';

const initialState =[
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false
  },
  {
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra del poder',
    done: false
  }
]

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = ( todo ) =>{
    console.log(todo);
  }

    return (
      <>
          <h1>TodoApp 10, <small>pendientes: 2</small></h1>
          <hr />

            <div className="row">
              <div className="col-7">
                
                {/* {TodoList} */}
                <ul className="list-group">
                  {
                    todos.map( todo => (
                      <li key={todo.id} className="list-group-item d-flex justify-content-between">
                        <span className="align-self-center">Item1</span>
                        <button className=" btn btn-danger">Borrar</button>
                      </li>

                    ))
                  }

                </ul>
                {/* Fin {TodoList} */}      
              </div>
              <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                {/* {Todo AddNewTodo(todo)} */}
                {/* { id: new Day().getTime()*2, description:'', done: false} */}
                <form >
                    <input 
                    type="text"
                    placeholder='¿Que hay que hacer?'
                    className='form-control'
                    />
                    <button 
                      type='submit'
                      className='btn btn-outline-primary mt-1'

                      >
                      Agregar
                    </button>
                </form>
                {/* {fin AddNewTodo} */}

              </div>
            </div>

      
      
      </>
    )
}
