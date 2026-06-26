import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [],
    filter: 'all'
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
            })
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find(t => t.id === action.payload)
            if (task) task.completed = !task.completed
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(t => t.id !== action.payload)
        },
    },
})

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions
export default tasksSlice.reducer