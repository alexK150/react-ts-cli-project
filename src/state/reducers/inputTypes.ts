export type InputData = {
    inputText: string;
    codeText: string;
}

export type InputAction = {
    type: string;
    payload: string;
}

export const SET_INPUT = 'SET_INPUT';
export const SET_CODE = 'SET_CODE';
