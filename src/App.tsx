import React, { FC } from 'react';
import { UseReducer } from './components/UseReducer'
import { UseRenderProp } from './components/UseRenderProp'
import { UseState } from './components/UseState'
import { UseMemo } from './components/UseMemo'
import { UseContext } from './components/UseContext'
import { UseEnumActions } from './components/UseEnumActions'
import './App.css';

const Padding: FC = () => <div style={{ padding: '50px 0' }}>=================</div>

const App: FC = () => {
    return <>
        <UseRenderProp>
            {({ loading, data }) => <pre>
                {`loading: ${loading}`} <br />
                {`data: [${data}]`}
            </pre>}
        </UseRenderProp>
        <Padding />
        <UseState initState={{ username: 'default name', password: "default password", email: "default email" }} />
        <Padding />
        <UseReducer />
        <Padding />
        <UseMemo />
        <Padding />
        <UseContext />
        <Padding />
        <UseEnumActions />
    </>
}

export default App;
