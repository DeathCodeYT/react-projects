import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    transictions: [],
    totalBalance: 0,
    totalIncome: 0,
    totalKharcha: 0
}

const transictionSlice = createSlice({
    name: "transection",
    initialState,
    reducers: {
        addKharcha: (state, action) => {
            state.transictions.push({ id: nanoid(), amount: action.payload.amount, text: action.payload.text, date: new Date(), expense: true })
            state.totalKharcha += action.payload.amount
            state.totalBalance -= action.payload.amount 
        },
        addIncome: (state, action) => {
            state.transictions.push({ id: nanoid(), amount: action.payload.amount, text: action.payload.text, date: new Date(), expense: false })
            state.totalIncome += action.payload.amount
            state.totalBalance += action.payload.amount 
        },
    }
})

export const {addIncome,addKharcha} = transictionSlice.actions
export default transictionSlice.reducer