import React from 'react';

interface UserClassI {
    isOpen: boolean
}

export class UserClassComponent<T> extends React.Component<T, UserClassI> {
    constructor(props: T) {
        super(props);
        this.state = {
            isOpen: true
        }
    }

    onShow = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return <div>
            <div onClick={this.onShow}>{this.state.isOpen ? (this.props.children) : 'Show'}</div>

            <div>Content</div>
        </div>;
    }
}