import React from "react"
import { Todo } from "../../types"
import { Draggable, Droppable } from "react-beautiful-dnd"
import { selectTodos } from "../../redux/slices/todoSlice"
import { useSelector, useDispatch } from "react-redux"
import SingleTodo from "../solo-todo/SingleTodo"

type Props = {
  todos: Todo[]
}

const TodoList = ({ todos }: Props) => {
  // We need to create a droppable zone for each todo item
  // The array of todos is coming from the redux store
  // We need to map over the array of todos and create a droppable zone for each todo item

  console.log("todos", todos)
  return (
    <div>
      <Droppable droppableId="todosList">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {todos.map((todo, index) => (
              <SingleTodo key={todo.id} todo={todo} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default TodoList
