import { createSlice } from "@reduxjs/toolkit";

// First, define the initial values for the state
const initialState = {
    tasks: [],
};

// Next, create a slice for the state
// Next, create a slice for the state
const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
    },
});

// this is for dispatch
export const { addTask } = taskSlice.actions;

// this is for configureStore
export default taskSlice.reducer;