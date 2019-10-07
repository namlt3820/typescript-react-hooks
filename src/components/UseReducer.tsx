import React, { useReducer, useEffect } from 'react'

interface IState {
    data: any,
    error: null | true,
    loaded: boolean,
    fetching: boolean
}

const UseReducer: React.FC = () => {
    const API_URL = 'https://api.myjson.com/bins/19enqe'
    const initialState = {
        data: null,
        error: null,
        loaded: false,
        fetching: false
    }
    const reducer = (state: IState, newState: IState): IState => ({ ...state, ...newState })
    const [state, setState] = useReducer(reducer, initialState)
    const fetchData = async () => {
        const response = await fetch(API_URL)
        const data = await response.json()
        const status = response.status

        if (status !== 200) {
            return setState({
                data, error: true, loaded: true, fetching: false
            })
        }
        setState({
            data, error: null, loaded: true, fetching: false
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const { error, data } = state
    return error ? <div>Sorry, and error occured :( </div> :
        <pre>{JSON.stringify(data, null, ' ')}</pre>

}

export { UseReducer }