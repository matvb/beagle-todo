import React from 'react'
import { useSelector } from 'react-redux'
import { todoDeleted } from './todosSlice'
import { useDispatch } from 'react-redux'

export const TodoList = () => {
  const todos = useSelector(state => state.todos)
  
  const dispatch = useDispatch()

  const onDelTodoClicked = (todoId) => {
    dispatch(
    todoDeleted({
        id: todoId
    })
    )
  }

  const renderedTodos = todos.map(todo => (
    <div className="todo-item" key={todo.id}>
      <button type="button" className="todo-btn" onClick={() => onDelTodoClicked(todo.id)}><div className="btn-del-todo"></div></button>
      <p className="todo-content">{todo.content.substring(0, 100)}</p>
    </div>
  ))

  return (
    <section className="todos-list">
      {renderedTodos}
    </section>
  )
}