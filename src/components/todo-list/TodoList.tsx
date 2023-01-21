import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { Todo } from "../../types"
import { todoSlice } from "../../redux/slices/todoSlice"
import ColumnLayout from "../column-layout/ColumnLayout"
import { Container } from "react-bootstrap"

const TodoList = () => {
  const { todo } = useSelector((state: RootState) => state)
  const {
    actions: { add, complete, remove, updateTextShowed },
  } = todoSlice

  return (
    <Container>
      <ColumnLayout
        droppableId="todo"
        labelText="Todo"
        addHandler={add}
        completeHandler={complete}
        removeHandler={remove}
        updateTextShowed={updateTextShowed}
        selectorState={todo}
      />
    </Container>
  )
}

export default TodoList
