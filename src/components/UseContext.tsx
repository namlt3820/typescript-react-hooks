import React, { FC, useContext } from 'react'
import { ThemeContext } from './CreateContext'

const { Provider } = ThemeContext

const _UseContext: FC = () => {
    const { backgroundColor, color } = useContext(ThemeContext)
    return <div style={{ backgroundColor, padding: '25px 0' }}>
        <p style={{ color, textAlign: 'center', fontSize: '30px' }}>The background and text colors are from context object</p>
    </div>
}

const UseContext: FC = () => (
    <Provider value={{ backgroundColor: '#e5d0d0', color: '#008080' }}>
        <_UseContext />
    </Provider>)

export { UseContext }