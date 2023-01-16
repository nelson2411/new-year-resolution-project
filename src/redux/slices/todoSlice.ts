import { Todo } from "../../types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { v4 as uuidv4 } from "uuid"

export interface TodoListState {
  todos: Todo[]
}

const initialState: TodoListState = {
  todos: [],
}

/* 
We will create a slice of state for our todo list.
Todo's will be stored in the todos array. And then display them in the TodoList component.
A todo is created with an Id and a title. The completed property is set to false by default.
The id is created with the uuid package.


*/

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload]
    },
    toggleTodo: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },
})

export const selectTodos = (state: RootState) => state.todos.todos
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer
