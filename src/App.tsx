import * as esbuild from 'esbuild-wasm';
import React, {useEffect, useReducer, useRef} from 'react';
import {initialInputState, inputReducer} from "./state/reducers/inputReducer";
import {SET_CODE, SET_INPUT} from "./state/reducers/inputTypes";

const App = () => {
    const [state, dispatch] = useReducer(inputReducer, initialInputState)
    const refContainer = useRef<any>('');

    const inputHandler = (inputText: string) => dispatch({type: SET_INPUT, payload: inputText});
    const onClickHandler = async () => {
        if (!refContainer.current) return;
        const transpileRes = await refContainer.current.transform(state.inputText, {
            loader: 'jsx',
            target: 'es2015'
        })
        dispatch({type: SET_CODE, payload: transpileRes.code})
    };

    const startESBuildService = async () => {
        refContainer.current = await esbuild.startService({
            worker: true,
            wasmURL: '/esbuild.wasm'
        })
    }

    useEffect(()=>{
        startESBuildService()
    }, [])

    return (
        <div>
            <textarea value={state.inputText} onChange={(e)=>inputHandler(e.target.value)}></textarea>
            <div>
                <button onClick={onClickHandler}>Submit</button>
            </div>
            <pre>{state.codeText}</pre>
        </div>
    );
};

export default App;
