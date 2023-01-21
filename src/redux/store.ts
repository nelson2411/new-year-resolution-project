import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist"
import { combineReducers } from "redux"
import { todoSlice } from "./slices/todoSlice"
import { isDoneSlice } from "./slices/isDoneSlice"
import { inProgressSlice } from "./slices/inProgressSlice"

export const persistConfig = {
  key: "root",
  version: 1,
  storage,
}

const persistReducers = persistReducer(
  persistConfig,
  combineReducers({
    done: isDoneSlice.reducer,
    todo: todoSlice.reducer,
    inProgress: inProgressSlice.reducer,
  })
)

export const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat()
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
