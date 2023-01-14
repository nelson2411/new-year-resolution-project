import React from "react"
import { v4 as uuidv4 } from "uuid"
import { useDispatch } from "react-redux"
import { addTodo } from "../../redux/slices/todoSlice"
import { Todo } from "../../types"

const InputField = () => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  const handleSubmit = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (inputRef.current) {
        const newTodo: Todo = {
          id: parseInt(uuidv4().replace(/-/g, ""), 16),
          title: inputRef.current.value,
          completed: false,
        }
        dispatch(addTodo(newTodo))
        inputRef.current.value = ""
      }
    },
    [dispatch, inputRef]
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
