import React from 'react';
import { useState } from 'react';

function UseState(props) {

    const [username,setusername]=useState(0)
    // const [varA,setVarA]=useState();
    // const [varB,setVarB]=useState(0)

        // function sum(){

        //     // setVarA(+1)
        //     // setVarB(20)
        // }
    return (
        <div>
          <h1>{username}</h1>
          <button onClick={()=>{setusername(username+1)}}>click</button>
          
          <br />
          {/* {varA+varB}
          <button onClick={sum}>click</button> */}
        </div>
    );
}

export default UseState;