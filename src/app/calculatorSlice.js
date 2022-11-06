import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    output: 0,
    formula: '',
    calculated: false,
}

const operators = ['+', '-', 'x', '/']

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        clearCalculator: (state) => {
            state.output = 0
            state.formula = ''
        },
        addToOutput: (state, action) => {
            if (state.calculated) {
                state.formula = ''
                state.calculated = false
            }
            if (state.formula === '') {
                state.formula = action.payload
                state.output = action.payload
            } else {
                state.formula += action.payload
                state.output = action.payload
            }

        },
        addToFormula: (state, action) => {
            if (state.calculated) {
                state.formula = state.output
                state.calculated = false
            }
            let lastOperator = state.formula.toString().slice(-1)
            if (operators.includes(lastOperator)) {
                if (action.payload == '-') {
                    state.formula += action.payload
                } else {
                    state.formula = state.formula.slice(0, -1) + action.payload
                }
            } else {
                console.log('else')
                state.formula += action.payload
            }
            state.output = action.payload
        },
        calculate: (state) => {
            let exp = state.formula.toString().replace('x', '*')
            let result;
            try {
                result = eval(exp)
                state.output = result
                state.calculated = true
                state.formula += `=${result}`
            } catch (e) {
                result = 'Error'
                console.log(e.message)
            }
        }
    }
})

export const { addToFormula, clearCalculator, calculate, addToOutput } = calculatorSlice.actions

export const selectFormula = (state) => state.calculator.formula
export const selectOutput = (state) => state.calculator.output

export default calculatorSlice.reducer