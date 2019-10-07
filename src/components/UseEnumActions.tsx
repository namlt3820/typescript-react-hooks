import React, { FC, useReducer, Reducer } from 'react'

enum ActionTypes {
    Increment = 'increment',
    Decrement = 'decrement'
}

interface IState {
    count: number;
}

interface IAction {
    type: ActionTypes;
    payload: {
        count: number;
    }
}

const initialState: IState = { count: 0 }

const reducer: Reducer<IState, IAction> = (state, action) => {
    switch (action.type) {
        case ActionTypes.Increment:
            return { count: state.count + action.payload.count }
        case ActionTypes.Decrement:
            return { count: state.count - action.payload.count }
        default:
            return state
    }
}

export const UseEnumActions: FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <div>
        <div>Count: {state.count}</div>
        <button onClick={() => dispatch({ type: ActionTypes.Increment, payload: { count: 1 } })}>Increment</button>
        <button onClick={() => dispatch({ type: ActionTypes.Decrement, payload: { count: 1 } })}>Decrement</button>
    </div>
}