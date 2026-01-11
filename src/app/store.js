import { configureStore } from '@reduxjs/toolkit'
import claculationSlice from '../feature/claculation/claculationSlice'

export const store = configureStore({
    reducer: {
        claculation: claculationSlice
    },
})

