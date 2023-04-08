import React, { Component } from 'react';

class state extends Component {
    
    constructor(props){
        super(props)
        this.state={
            author:"",
            book:"*20"
        }

    }
    changdata=()=>{

        this.setState({author:"deep patel",book:"whatever"})
        console.log("btn log");
    }
    render() {
        return (
          <>
          <div className="container">
            <div className="row mt-5">
                <div className="col">
                    {this.state.author}
                    <button onClick={this.changdata}>click me</button>
                    {this.state.book}
                </div>
            </div>
          </div>
          </>
        );
    }
}

export default state;