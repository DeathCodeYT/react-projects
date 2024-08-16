import React, { useRef } from 'react'
import { useDispatch } from "react-redux"
import { addIncome, addKharcha } from '../features/transectionSlice'

function AddTransection() {
    const dispatch = useDispatch()
    const textRef = useRef()
    const amountRef = useRef()
    function addTransection(expense){
        let amount = parseFloat(amountRef.current.value)
        if (amount < 0)
            amount = amount*-1
        if(expense){
            dispatch(addKharcha({text:textRef.current.value,amount:amount}))
            textRef.current.value = ""
            amountRef.current.value = ""
            return 
        }
        dispatch(addIncome({text:textRef.current.value,amount:amount}))
        textRef.current.value = ""
        amountRef.current.value = ""
        return

    }
    return (
        <>
            <span className="text-2xl font-semibold w-full border-b border-gray-500 mt-4">
                Add Transection
            </span>
            <div className="flex flex-col gap-1 p-2">
                <span className="text-xl font-semibold w-full">Text</span>
                <input
                    ref={textRef}
                    className="bg-white rounded-md p-2 text-base"
                    placeholder="Enter Text..."
                />
            </div>
            <div className="flex flex-col gap-1 p-2">
                <span className="text-xl font-semibold w-full">
                    Ammount{" "}
                </span>
                <input
                    ref={amountRef}
                    type="number"
                    className="bg-white rounded-md p-2 text-base"
                    placeholder="Enter Amount..."
                />
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={() => addTransection(false)}
                    className="bg-green-500 rounded-md shadow-md py-2 m-2 w-full"
                >
                    Add Income
                </button>
                <button
                    onClick={() => addTransection(true)}
                    className="bg-red-500 rounded-md shadow-md py-2 m-2 w-full"
                >
                    Add Expense
                </button>
            </div>
        </>
    )
}

export default AddTransection