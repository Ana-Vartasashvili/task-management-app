import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Tasks } from '../types/global'

export interface TasksState {
  tasks: Tasks[]
  error: string
}

const initialState: TasksState = {
  tasks: [],
  error: '',
}

export const TasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTasksData(state, action) {
      state.tasks = action.payload
    },

    setError(state, action) {
      state.error = action.payload
    },
  },
})

export const { addTasksData, setError } = TasksSlice.actions

export default TasksSlice.reducer
