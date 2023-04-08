import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifeCycle extends Component {
    constructor(props) {
        super(props)
        console.log("consturctor called");
        this.state={counter:0}

    }

    componentWillMount() {

    }

    componentDidMount() {
        setTimeout(()=>{

            console.log(" componentDidMount called");

        },3000)
        
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps called");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("nextProps called");
        console.log("nextState called");
        return true;

    }

    componentWillUpdate(nextProps, nextState) {
        

    }

    componentDidUpdate(prevProps, prevState) {
        console.log("preveProps called");
        console.log("preveState called");
    }

    componentWillUnmount() {

    }
    btnClick=()=>{
        this.setState({counter:this.state.counter+1})
        console.log("btn called");
    }

    render() {
        return (
           <>
           <h1>{this.state.counter}</h1>
           <button onClick={this.btnClick}>click me!</button>
           </>
        );
    }
}

lifeCycle.propTypes = {

};

export default lifeCycle;