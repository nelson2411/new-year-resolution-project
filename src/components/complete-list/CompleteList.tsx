import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { Todo } from "../../types"
import { isDoneSlice } from "../../redux/slices/isDoneSlice"
import ColumnLayout from "../column-layout/ColumnLayout"
import { Container } from "react-bootstrap"

const CompleteList = () => {
  const { done } = useSelector((state: RootState) => state)

  const {
    actions: { add, complete, remove, updateTextShowed },
  } = isDoneSlice

  return (
    <Container>
      <ColumnLayout
        droppableId="done"
        labelText="Done"
        addHandler={add}
        completeHandler={complete}
        removeHandler={remove}
        updateTextShowed={updateTextShowed}
        selectorState={done}
      />
    </Container>
  )
}

export default CompleteList
