import React, { useCallback } from "react"
import logo from "./logo.svg"
import InputField from "./components/input-field/InputField"
import TodoList from "./components/todo-list/TodoList"
import CompleteList from "./components/complete-list/CompleteList"
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"
import { useSelector, useDispatch } from "react-redux"
import { selectTodos } from "./redux/slices/todoSlice"
import { toggleTodo } from "./redux/slices/todoSlice"
import "./App.css"

function App() {
  const todos = useSelector(selectTodos)
  const dispatch = useDispatch()
  /*

I need to create a DragDropContext wrapper around the TodoList component
The todoList component needs to be a Droppable component and 
the SingleTodo component needs to be a Draggable component

The information about the todos is coming from the redux store and 
the need to be passed down to the TodoList component

The id for every todo is made using the uuid package

I need to create a onDragEnd function that will be passed down to the DragDropContext component
using a callback function. The onDragEnd function will be responsible for updating the redux store
with the new order of the todos array.

*/

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { destination, source } = result
      if (!destination) {
        return
      }

      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return
      }

      if (
        destination.droppableId === "todosList" ||
        destination.droppableId === "completedTodosList" ||
        destination.droppableId === "onHoldTodosList"
      ) {
        // create a new array from the existing todos array
        const newTodos = Array.from(todos)
        // remove the todo item from its original index
        const [reorderedTodo] = newTodos.splice(source.index, 1)
        // insert the todo item at the new index
        newTodos.splice(destination.index, 0, reorderedTodo)
        // dispatch the toggleTodo action with the updated todos array
        dispatch(toggleTodo(newTodos))
      }
    },
    [todos, dispatch]
  )

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <InputField />
        <h1>React Redux TypeScript</h1>
        <TodoList todos={todos} />
        <CompleteList todos={todos} />
      </DragDropContext>
    </>
  )
}

export default App
