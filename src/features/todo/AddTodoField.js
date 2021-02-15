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

  const keyPress = (e) => {
    if(e.key == "Enter"){
      onAddTodoClicked()
   }
 }

  return (
    <section>
      <div className="todo-item todo-item-add">
          <button type="button" className="todo-btn todo-add-btn" onClick={onAddTodoClicked} ><div className="add-todo-icon"></div></button>
          <input
            autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
            id="todoContentField"
            className="todo-content"
            value={content}
            onChange={onContentChanged}
            onKeyPress={(e) => keyPress(e)}
          />
      </div>
    </section>
  )
}