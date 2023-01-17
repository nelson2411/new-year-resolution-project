import React from "react"
import { Droppable } from "react-beautiful-dnd"
import SingleTodo from "../solo-todo/SingleTodo"
import { Todo } from "../../types"

/*
 * DroppableIs is: "completedTodosList"
 *
 */

const CompleteList = () => {
  const [isCompleted, setIsCompleted] = React.useState(false)

  return (
    <div>
      <Droppable droppableId="completedTodosList">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {isCompleted && <h1>Hello new list</h1>}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default CompleteList
