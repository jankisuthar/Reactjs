import React, { Component } from 'react';
import PropTypes from 'prop-types';

class fatchapi extends Component {
    constructor(props) {
        super(props);
        this.state={
            fatchdata:'',
            status:'padding'
        }

    }


    componentDidMount() {

        console.log("didmount called");
       setTimeout(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments').then((res)=>res.json()).then((response)=>{
            console.log(response);
            this.setState({fatchdata:response})
            this.setState({status:"completed"})
        }).catch((ErrorHAnd1)=>{
            console.log(ErrorHAnd1);
        })
       },3000)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                    {this.state.status}<br></br>
                    {this.state.status == 'completed'?<div>{JSON.stringify(this.state.fatchdata)}</div>:"no data found"}  
                    </div>
                </div>
            </div>
         
        );
    }
}

fatchapi.propTypes = {

};

export default fatchapi;