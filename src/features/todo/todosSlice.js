import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', content: 'Walk my Beagle!' },
  { id: '2', content: 'Wash my Beagle!' }
]

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action) {
      state.push(action.payload)
    },
    todoDeleted(state, action) {
      const { id } = action.payload
      const existingTodo = state.find(todo => todo.id === id)
      if (existingTodo) {
        return state.filter(todo => todo !== existingTodo)
      }
    }
  }
})

export const { todoAdded, todoDeleted } = todosSlice.actions

export default todosSlice.reducer