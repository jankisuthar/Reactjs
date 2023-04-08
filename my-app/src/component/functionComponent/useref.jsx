import React from 'react';
import {useRef} from 'react'


function Useref(props) {
    const inp = useRef(null)
    console.log(inp);

    const btnClick=()=>{
        inp.current.focus()
        console.log( inp.current.value);
        if( inp.current.value=="")
        {
            alert("plase enter the data")
        }
    }

    return (
        <div>
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <input type="text" className="form-control" ref={inp}></input>
                    <button className='"btn btn-primary mt-2"' onClick={btnClick}>click</button>
                </div>
            </div>
            </div>        
        </div>
    );
}

export default Useref;