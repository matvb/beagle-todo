import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { todoAdded } from './todosSlice'

export const AddTodoField = () => {
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const todos = useSelector(state => state.todos)

  const onContentChanged = e => setContent(e.target.value)

  const onAddTodoClicked = () => {
    if (content) {
      dispatch(
        todoAdded({
          id: todos.length+1,
          content
        })
      )
      setContent('')
    }
  }

  return (
    <section>
      <h2>Add Todo</h2>
      <form>
        <textarea
          id="todoContent"
          name="todoContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onAddTodoClicked}>+</button>
      </form>
    </section>
  )
}