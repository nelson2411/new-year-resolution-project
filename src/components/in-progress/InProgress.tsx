import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { Todo } from "../../types"
import { inProgressSlice } from "../../redux/slices/inProgressSlice"
import ColumnLayout from "../column-layout/ColumnLayout"
import { Container } from "react-bootstrap"

const InProgress = () => {
  const { inProgress } = useSelector((state: RootState) => state)

  const {
    actions: { add, complete, remove, updateTextShowed },
  } = inProgressSlice

  return (
    <Container>
      <ColumnLayout
        droppableId="inProgress"
        labelText="In Progress"
        addHandler={add}
        completeHandler={complete}
        removeHandler={remove}
        updateTextShowed={updateTextShowed}
        selectorState={inProgress}
      />
    </Container>
  )
}

export default InProgress
