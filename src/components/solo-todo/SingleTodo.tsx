import React from "react"
import { useSelector } from "react-redux"
import { selectTodos } from "../../redux/slices/todoSlice"
import { Draggable } from "react-beautiful-dnd"
import { Todo } from "../../types"

type Props = {
  todo: Todo
  index: number
}

// Droppable id is "todos" in TodoList.tsx

const SingleTodo = ({ todo, index }: Props) => {
  return (
    <div>
      <Draggable draggableId={todo.id.toString()} index={index}>
        {(provided) => (
          <span
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <p>{todo.title}</p>
          </span>
        )}
      </Draggable>
    </div>
  )
}

export default SingleTodo
