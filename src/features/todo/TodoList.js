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
    <article className="todo-excerpt" key={todo.id}>
      <p className="todo-content">{todo.content.substring(0, 100)}</p>
      <button type="button" onClick={() => onDelTodoClicked(todo.id)}>-</button>
    </article>
  ))

  return (
    <section className="todos-list">
      <h2>Todos</h2>
      {renderedTodos}
    </section>
  )
}