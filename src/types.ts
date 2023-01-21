import { AnyAction } from "@reduxjs/toolkit"

/*
The Todo interface is used to define the type of the todo object.
The TActionSlice interface is used to define the type of the object that is passed to the action.
The TUpdatedTextShowed interface is used to define the type of the object that is passed to the action.
Omit is a utility type that returns a type that excludes the specified properties from the type.
The ColumLayoutProps interface is used to define the type of the props that are passed to 
the ColumnLayout component.
*/

export interface Todo {
  id: string
  text: string
  isCompleted: boolean
  createdAt?: string
  updatedAt?: string
  isTextShowed?: boolean
}

export type TActionSlice = Omit<Todo, "text">
export type TUpdatedTextShowed = Omit<TActionSlice, "isCompleted">

export interface ColumnLayoutProps {
  labelText: string
  addHandler: (v: string) => AnyAction
  removeHandler: (v: string) => AnyAction
  completeHandler: (v: TActionSlice) => AnyAction
  selectorState: Todo[]
  droppableId: string
  updateTextShowed: (v: TUpdatedTextShowed) => AnyAction
}
