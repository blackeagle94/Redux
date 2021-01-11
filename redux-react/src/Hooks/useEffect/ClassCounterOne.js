import React, { Component } from 'react'


class ClassCounterOne extends Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse(localStorage.getItem('state'))
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        document.title = `Clicked ${this.state.count} times`
        localStorage.setItem('state',JSON.stringify(this.state))
        
    }
    

    render() {
        return (
            <div>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Click {this.state.count} times</button>
                <button onClick={() => this.setState({count: 0})}>reset</button>
            </div>
        );
    }
}

export default ClassCounterOne;