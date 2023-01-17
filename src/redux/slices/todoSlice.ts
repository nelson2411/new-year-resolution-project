import { Todo } from "../../types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

/* 
The app needs to have four different arrays of todos. One for each category.
When a todo is created it will be added to the todos array. 
And then moved can be moved to the appropriate category.
Each category will start with an empty array.
Each todo is an object with an id, title, and completed property.
The completed property is set to false by default.
The categories will be: 
* todos, the default category
* financialTodos, a category for financial goals in the year
* personalImprovementTodos, a category for personal improvement goals in the year
* healthTodos, a category for health goals in the year
* completedTodos, a category for completed todos. 

The todos array will be the default array.
financialTodos, personalImprovementTodos, healthTodos, and completedTodos will be empty arrays 
in the initial state.

*/

export interface TodoListState {
  todos: Todo[]
  financialTodos: Todo[]
  personalImprovementTodos: Todo[]
  healthTodos: Todo[]
  completedTodos: Todo[]
}

const initialState: TodoListState = {
  todos: [],
  financialTodos: [],
  personalImprovementTodos: [],
  healthTodos: [],
  completedTodos: [],
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
      state.todos = [...state.todos, action.payload] // add the new todo to the todos array
    },
    toggleTodo: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload
    },
    moveTodo: (
      state,
      action: PayloadAction<{ id: string; category: string }>
    ) => {
      const { id, category } = action.payload
      const index = state.todos.findIndex((todo) => todo.id === id)
      if (index !== -1) {
        return
      }
      const [todo] = state.todos.splice(index, 1)
      todo.category = category
      state.todos.push(todo)
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },
})

export const selectTodos = (state: RootState) => state.todos.todos
export const { addTodo, toggleTodo, deleteTodo, moveTodo } = todoSlice.actions
export default todoSlice.reducer
