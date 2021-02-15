import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { todoDeleted } from './todosSlice'
import { todoUpdated } from './todosSlice'
import { useDispatch } from 'react-redux'

export const TodoList = () => {
  const todos = useSelector(state => state.todos)
  
  const dispatch = useDispatch()

  const [content, setContent] = useState('')
  const onContentChanged = e => setContent(e.target.value)

  const onDelTodoClicked = (todoId) => {
    dispatch(
    todoDeleted({
        id: todoId
    })
    )
  }


  const onEditTodoClicked = (newTodoContent, todoId) => {
    dispatch(
      todoUpdated({
        id: todoId,
        content: newTodoContent
    })
    )
  }

  const onBlurHandler = (todoContent, todoId) => {
    if (todoContent == '') {
      onDelTodoClicked(todoId)
    }
  }

  const renderedTodos = todos.map(todo => (
    <div className="todo-item" key={todo.id}>
      <button type="button" className="todo-btn todo-del-btn" onClick={() => onDelTodoClicked(todo.id)}><div className="del-todo-icon"></div></button>
      <input
            autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
            className="todo-content"
            value={todo.content}
            onChange={(e) => onEditTodoClicked(e.target.value, todo.id)}
            onBlur={(e) => onBlurHandler(e.target.value, todo.id)}
          />
    </div>
  ))

  return (
    <section className="todos-list">
      {renderedTodos}
    </section>
  )
}