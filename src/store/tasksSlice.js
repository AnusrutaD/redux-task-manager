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
    },
})

export const { addTask } = tasksSlice.actions
export default tasksSlice.reducer