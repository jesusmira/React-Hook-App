

import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
    {
      todos.map( todo => (
        <TodoListItem 
        key={ todo.id } 
        todo={ todo } 
        onDeleteTodo={ onDeleteTodo }
        onToggleTodo={ onToggleTodo} />
      ))
    }
  </ul>
  )
}
