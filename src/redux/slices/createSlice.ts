import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"
import { TActionSlice, TUpdatedTextShowed, Todo } from "../../types"

const initialState: Todo[] = []

export const createCustomSlice = (name: string) => {
  const {
    actions: { add, remove, complete, updateTextShowed, reorder, update },
    reducer,
  } = createSlice({
    name,
    initialState,
    reducers: {
      add: {
        reducer: (state, action: PayloadAction<Todo>) => {
          state.push(action.payload)
        },
        prepare: (text: string) => ({
          payload: {
            id: uuidv4(),
            text,
            isCompleted: false,
            createdAt: new Date().toLocaleString(),
            isTextShowed: false,
          } as Todo,
        }),
      },
      remove(state, action: PayloadAction<string>) {
        const index = state.findIndex((todo) => todo.id === action.payload)
        state.splice(index, 1)
      },
      update(state, action) {
        state.splice(action.payload.index, 0, action.payload.filterState)
      },
      complete(state, action: PayloadAction<TActionSlice>) {
        const index = state.findIndex(({ id }) => id === action.payload.id)
        state[index].isCompleted = action.payload.isCompleted
        state[index].updatedAt = action.payload.updatedAt
      },
      updateTextShowed(state, action: PayloadAction<TUpdatedTextShowed>) {
        const index = state.findIndex(({ id }) => id === action.payload.id)
        state[index].isTextShowed = action.payload.isTextShowed
      },
      reorder(state, action) {
        const [removed] = state.splice(action.payload.source.index, 1)
        state.splice(action.payload.destination.index, 0, removed)
      },
    },
  })

  return {
    actions: { add, remove, complete, updateTextShowed, reorder, update },
    reducer,
  }
}
