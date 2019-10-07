import React, { ReactElement } from 'react'

interface IState {
    loading: boolean;
    data: any[];
}

interface IProps {
    children(args: IState): ReactElement
}

class UseRenderProp extends React.Component<IProps, IState> {
    state = {
        loading: false,
        data: []
    }

    render() {
        return this.props.children(this.state)
    }
}

export { UseRenderProp }

