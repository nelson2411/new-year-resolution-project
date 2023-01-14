import React from "react"
import logo from "./logo.svg"
import InputField from "./components/input-field/InputField"
import SingleTodo from "./components/solo-todo/SingleTodo"
import "./App.css"

function App() {
  return (
    <div>
      <h1>React Redux TypeScript</h1>
      <InputField />
      <SingleTodo />
    </div>
  )
}

export default App
