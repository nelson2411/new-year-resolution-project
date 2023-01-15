import React from "react"
import { Todo } from "../../types"
import { Droppable } from "react-beautiful-dnd"
import { selectTodos } from "../../redux/slices/todoSlice"
import { useSelector, useDispatch } from "react-redux"
import SingleTodo from "../solo-todo/SingleTodo"

const TodoList = () => {
  const todos = useSelector(selectTodos)

  // We need to create a droppable zone for each todo item
  // The array of todos is coming from the redux store
  // We need to map over the array of todos and create a droppable zone for each todo item

  return (
    <div>
      <Droppable droppableId="todos">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {todos.map((todo: Todo, index: number) => (
              <SingleTodo
                key={todo.id}
                id={todo.id}
                index={index}
                title={todo.title}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default TodoList
