import React from 'react';

export class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        };
    }
    render() {
        const { num } = this.state;
        return(
            <div onClick={this.addNum}>{num}</div>
        )
    }
    addNum =()=> {
        this.setState({
            num: 2
        });
    }
}

export default Index;