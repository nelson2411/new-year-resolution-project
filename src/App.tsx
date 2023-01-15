import React from "react"
import logo from "./logo.svg"
import InputField from "./components/input-field/InputField"
import TodoList from "./components/todo-list/TodoList"
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"
import "./App.css"

function App() {
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    console.log("destination", destination)
    console.log("source", source)
    console.log("draggableId", draggableId)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <h1>React Redux TypeScript</h1>
      <InputField />
      <TodoList />
    </DragDropContext>
  )
}

export default App
