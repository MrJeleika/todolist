import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAddTodo, IChangeTodoStatus, IInitalState } from 'types';

const initialState: IInitalState = {
  todos: []
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo: (state, action:PayloadAction<IAddTodo>) => {
      state.todos = [...state.todos, {...action.payload, id: state.todos.length + 1, status: false}];
    },
    changeTodoStatus: (state, action:PayloadAction<IChangeTodoStatus>) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id)
      todo!.status = action.payload.status
    },
  },
})

export default todoSlice.reducer

export const {
  createTodo,changeTodoStatus
} = todoSlice.actions
