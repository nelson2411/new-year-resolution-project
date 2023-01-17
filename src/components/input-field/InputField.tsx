import React from "react"
import { v4 as uuidv4 } from "uuid"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../../redux/slices/todoSlice"
import { selectTodos } from "../../redux/slices/todoSlice"
import { Todo } from "../../types"

const InputField = () => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const todos = useSelector(selectTodos)

  const dispatch = useDispatch()

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (inputRef.current) {
        dispatch(
          addTodo({
            id: uuidv4(),
            title: inputRef.current.value,
            category: "todos",
            completed: false,
          })
        )
        inputRef.current.value = ""
      }
    },
    [dispatch]
  )

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your New Year Resolution"
      ></input>
      <button type="submit">Add</button>
    </form>
  )
}

export default InputField
