import React from "react"
import { Droppable } from "react-beautiful-dnd"

const FinancialTodos = () => {
  const [category, setCategory] = React.useState("todos")

  return (
    <Droppable droppableId="financialTodosList">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <h1>Financial Todos</h1>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default FinancialTodos
