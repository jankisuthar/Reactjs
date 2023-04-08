 import React from 'react';
 import { useState } from 'react';







function Countertask(props) {
    const   [counter,setcounter]=useState(1);
 
    return (
        <div>
        <h1>this is countdown of {counter} cycle</h1>
        <button onClick={()=>{setcounter(counter+1)}}>click</button>
        <button onClick={()=>{setcounter(counter-1)}}>click</button>
        </div>
   );
}

export default Countertask;