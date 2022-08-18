import {InputAction, InputData, SET_INPUT, SET_CODE} from "./inputTypes";

export const initialInputState = {
    inputText: '',
    codeText: ''
}

export const inputReducer = (state: InputData, action: InputAction) => {
    switch (action.type) {
        case SET_INPUT: {
            return {
                ...state,
                inputText: action.payload
            }
        }
        case SET_CODE: {
            return {
                ...state,
                codeText: action.payload
            }
        }
        default: {
            return state
        }
    }
}
