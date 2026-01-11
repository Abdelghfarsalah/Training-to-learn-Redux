import { createSlice } from '@reduxjs/toolkit';

import { createAsyncThunk } from '@reduxjs/toolkit';


export const myThinkFunction = createAsyncThunk("myThinkFunction", async () => {
    setTimeout(() => {
        console.log("done function")
    }, 5000);
})
const initResult = {
    value: null,
}

export const claculationSlice = createSlice({
    name: "claculation",
    initialState: initResult,
    reducers: {
        sum: (currentState, action) => {
            currentState.value = Number(action.payload.firstNumberInput) + Number(action.payload.secondNumberInput);

        },
        div: (currentState, action) => {
            currentState.value = Number(action.payload.firstNumberInput) / Number(action.payload.secondNumberInput);

        },
        mul: (currentState, action) => {
            currentState.value = Number(action.payload.firstNumberInput) * Number(action.payload.secondNumberInput);

        },
        sub: (currentState, action) => {
            currentState.value = Number(action.payload.firstNumberInput) - Number(action.payload.secondNumberInput);

        },

    },
    extraReducers(builder) {
        builder.addCase(myThinkFunction.pending, () => {
            console.log("pending");
        }).addCase(myThinkFunction.fulfilled, () => {
            console.log("fulfilled");
        }).addCase(myThinkFunction.rejected, () => {
            console.log("rejected");
        })
    }
})

export const { sum, sub, mul, div } = claculationSlice.actions;
export default claculationSlice.reducer;
