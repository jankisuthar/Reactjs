import React, { Component } from 'react';
import PropTypes from 'prop-types';

class api extends Component {
    constructor(props) {
        super(props);
console.log("constuctror called");
this.state={

    userData:'',
    data:'Loading....',
    status:'padding'
}
    }

   
    componentDidMount() {

        console.log("didmount called");
       setTimeout(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json()).then((response)=>{
            console.log(response);
            this.setState({userData:response,status:"completed"})
        }).catch((ErrorHAnd1)=>{
            console.log(ErrorHAnd1);
        })
       },3000)
    }

    // componentWillUpdate(nextProps, nextState) {

    // }

    // componentDidUpdate(prevProps, prevState) {

    // }

    // componentWillUnmount() {

    // }
    btnClick=()=>{
        this.setState({
            data:"refesh"
        })
    }

    render() {
        return (
           <>
            {this.state.status}
            <br></br>
            <button onClick={this.btnClick}>click</button>
            {this.state.data}
            <br />
            {this.state.status}
           </>
        );
    }
}


export default api;