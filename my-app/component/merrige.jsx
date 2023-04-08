import React, { Component } from 'react';

class merrige extends Component {
   
    constructor(props){
        super(props)
        this.state={
            cloth:"",
            cloth2:"",
            cloth3:"",
        
            
        }

    }
    showdata =()=>{

        this.setState({cloth:"Embroidered Terry Rayon Jodhpuri Suit in Navy Blue"})
        console.log("btn log");
    }
    showdata_A =()=>{

        this.setState({cloth2:"sarees and krutas"})
        console.log("btn log");
    }
    showdata_B =()=>{

        this.setState({cloth3:"Yellow Embroidered Draped Lehenga Skirt & yellow krutas"})
        console.log("btn log");
    }
    render() {

        return (
            <div>
                <h1>angement:<h3>{this.state.cloth}</h3></h1>
                
             <button onClick={this.showdata}>sangeet</button>
             
             <h1>sangeet:<h3>{this.state.cloth2}</h3></h1>
                
                <button onClick={this.showdata_A}>angement</button>
               
                <h1>garbA:<h3>{this.state.cloth3}</h3></h1>
                
                <button onClick={this.showdata_B}>GARBA</button>
            </div>
        );
    }
}

export default merrige;