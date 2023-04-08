import React from 'react';
import './SectionC.css'
import { useState } from 'react';
import Dummy_api from './Dummy_api'
function SectionC(props) {
   
    const [first, setfirst] = useState(Dummy_api)
   
    return (
        <>
        <div className="containe-flud">
            <div className="hed">
                <h1 className='mt-5 hed_A'>Ride with Uber</h1>
            </div>
            <div className="rw">
               <div className="row_c row">
                {first.map((val)=>{
                     const{id,img,title,info}=val;
                     return(
                        
                        <div className="col-lg-6 mt-5 row part" key={id}>
                    <div className="lefts col-xxl-4"><img src={val.img} alt="" /></div>
                    <div className="lefts col-xxl-8">
                        <h1>{val.title}</h1>
                        <p>{val.info} </p>
                    </div>
                </div>
                     )

                })}
               
               
               </div>
                
                
            </div>
        </div>
        </>
    );
}

export default SectionC;