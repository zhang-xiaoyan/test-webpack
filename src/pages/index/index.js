import React from 'react';
import { connect } from 'react-redux';

export class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        };
    }
    render() {
        const { num } = this.state;
        const { indexText } = this.props;
        return(
            <div>
                <span onClick={this.addNum}>{ num }</span>
                <p onClick={this.addDis}>{ indexText }</p>
            </div>
        )
    }
    addNum =()=> {
        this.setState({
            num: 2
        });
    }

    addDis =()=> {
        const { dispatch } = this.props;
        dispatch({
            type: 'change_text',
            indexText: 'change index text'
        });
    }
}

const select = (state) => {
    const props = state.index;
    return {
        indexText: props.indexText
    };
};

export default connect(select)(Index);