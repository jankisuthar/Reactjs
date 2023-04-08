import React, { Component } from 'react';

class loops extends Component {
    render() {
        
        const Numbers=["test",1,2,3,4,5]
        // console.log(Numbers);

        //for with array

        // for(let index=0;index<=Numbers.length;index++)
        // {
        //     const element = Numbers[index]
        //     console.log(element);
        // }
        
        //forin

        // for(const my in Numbers)
        // {
        //     if(Numbers.hasOwnProperty.call(Numbers,my))
        //     {
        //         const ele =Numbers[my];
        //         console.log(ele);
        //     }
            
        // }
        
        //forof
        // for(const data of Numbers)
        // {
        //     console.log(data);
        // }

        //foreach
        // Numbers.forEach(ele=>{

        //     console.log(ele);
        // })
        //map

        const data =Numbers.map((res,j)=>{
            return <h2 key={j}>{res}</h2>
        })
        
        return (
            
         <>
           {data}
         </>
        );
    }
}

export default loops;