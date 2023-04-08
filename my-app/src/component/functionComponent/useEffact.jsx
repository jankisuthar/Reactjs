import React, { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function useEffact(props) {

    let A=50;
    let B=30;
    const [vara,setvara]=useState(0)
    const [username,setusername]=useState("deep")

    useLayoutEffect(()=>{
        setTimeout(()=>{
            console.log("uselayout called");
        },2000)
    })
    
    
    useEffect (()=>{

        console.log("useEffact called");
        return chngData
    },[vara,username])

    const [count,setcount]=useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            console.log("counter useEffaect");
            console.log(document.title=`you have clicled ${count} times`);
       
        },2000)

     })

    function chngData(){

        console.log("btn called");
        setvara(50)
        setusername("tops techologies")
    }
    
    return (
        <div>
          {A+B}  
          <br></br>
          {vara}
          <br></br>
          {username}
          <button onClick={chngData}>click me</button>
          <br />
          {count}
          <button onClick={()=>{setcount(count+1)}}>click me</button>
          <button onClick={()=>{setcount(count-1)}}>click me</button>
          </div>
    );
}

export default useEffact;