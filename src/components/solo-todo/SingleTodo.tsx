import React from "react"
import { useSelector } from "react-redux"
import { selectTodos } from "../../redux/slices/todoSlice"

const SingleTodo = () => {
  const todo = useSelector(selectTodos)
  return (
    <div>
      {todo.map((todo, index) => (
        <div key={index}>
          <h1>{todo.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default SingleTodo
