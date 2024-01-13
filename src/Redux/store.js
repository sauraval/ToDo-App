import { configureStore } from '@reduxjs/toolkit'
import todos from './Slice/todoSlice'
export const store=configureStore({
    reducer:{
        todos
    }
})