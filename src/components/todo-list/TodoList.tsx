import React from "react"
import { Todo } from "../../types"
import { Draggable, Droppable } from "react-beautiful-dnd"
import { selectTodos } from "../../redux/slices/todoSlice"
import { useSelector, useDispatch } from "react-redux"
import SingleTodo from "../solo-todo/SingleTodo"
import CompleteList from "../complete-list/CompleteList"

/*
todos can be moved from here to the other categories array: 
financialTodos, personalImprovementTodos, healthTodos, and completedTodos.
Each todo has four properties: id, title, completed, and category.

*/

type Props = {
  todos: Todo[]
}

const TodoList = ({ todos }: Props) => {
  console.log("todos", todos)
  return (
    <div>
      <Droppable droppableId="todosList">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {todos.map((todo, index) => (
              <SingleTodo todo={todo} key={todo.id} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default TodoList
