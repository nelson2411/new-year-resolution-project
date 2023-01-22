import React, { useCallback } from "react"
import logo from "./logo.svg"
import { DragDropContext, DropResult } from "react-beautiful-dnd"
import { todoSlice as todo } from "./redux/slices/todoSlice"
import { inProgressSlice as inProgress } from "./redux/slices/inProgressSlice"
import { isDoneSlice as done } from "./redux/slices/isDoneSlice"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "./redux/store"
import { Todo } from "./types"
import TodoList from "./components/todo-list/TodoList"
import InProgress from "./components/in-progress/InProgress"
import CompleteList from "./components/complete-list/CompleteList"
import GlobalStyles from "./components/global-styles/GlobalStyles"
import { MainContainer, MainRow } from "./App.styles"
import Title from "./components/title/Title"
import Footer from "./components/footer/Footer"
import { Row, Col, Container } from "react-bootstrap"
import "./App.css"

type TAllSlices = "todo" | "inProgress" | "done"

function App() {
  const dispatch = useDispatch()
  const appState = useSelector((state: RootState) => state)

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const { destination, source, draggableId } = result
    const allslices = { todo, inProgress, done }

    if (destination.droppableId === source.droppableId) {
      dispatch(
        allslices[destination.droppableId as TAllSlices].actions.reorder(result)
      )
    } else {
      const [filterState] = (
        (appState as any)[source.droppableId] as Todo[]
      ).filter(({ id }) => id === draggableId)

      dispatch(
        allslices[source.droppableId as TAllSlices].actions.remove(draggableId)
      )
      dispatch(
        allslices[destination.droppableId as TAllSlices].actions.update({
          ...result,
          filterState,
        })
      )
    }
  }

  return (
    <>
      <GlobalStyles />
      <DragDropContext onDragEnd={(res) => onDragEnd(res)}>
        <Title />
        <MainContainer>
          <MainRow>
            <Col>
              <TodoList />
            </Col>
            <Col>
              <InProgress />
            </Col>
            <Col>
              <CompleteList />
            </Col>
          </MainRow>
        </MainContainer>
      </DragDropContext>
      <Footer />
    </>
  )
}

export default App
