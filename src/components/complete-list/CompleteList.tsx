import React from "react"
import { Droppable } from "react-beautiful-dnd"
import SingleTodo from "../solo-todo/SingleTodo"
import { Todo } from "../../types"

type Props = {
  todos: Todo[]
}

/*
 * DroppableIs is: "completedTodosList"
 *
 */

const CompleteList = ({ todos }: Props) => {
  const [isCompleted, setIsCompleted] = React.useState(false)
  const completedTodos = todos.filter((todo) => todo.completed === true)
  const [completedTodo] = completedTodos

  if (completedTodo) {
    setIsCompleted(true)
  }

  return (
    <div>
      <Droppable droppableId="completedTodosList">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {isCompleted && (
              <SingleTodo key={completedTodo.id} todo={completedTodo} />
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default CompleteList
