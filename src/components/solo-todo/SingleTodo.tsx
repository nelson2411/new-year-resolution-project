import React from "react"
import { useSelector } from "react-redux"
import { selectTodos } from "../../redux/slices/todoSlice"
import { Draggable } from "react-beautiful-dnd"
import { Todo } from "../../types"

type Props = {
  id: number
  index: number
  title: string
}

// Droppable id is "todos" in TodoList.tsx

const SingleTodo = ({ id, index, title }: Props) => {
  const todos = useSelector(selectTodos)
  return (
    <div>
      <Draggable draggableId={id.toString()} index={index}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.draggableProps}>
            <div {...provided.dragHandleProps}>{title}</div>
          </div>
        )}
      </Draggable>
    </div>
  )
}

export default SingleTodo
