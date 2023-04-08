import React, { Component } from 'react';

class dinner extends Component {
    render() {
        const Numbers=["Cold Brewed Iced Coffee(Small",
        "Cold Brewed Iced Coffee(Large)",
        " Vanilla Frosty®-ccino(Small)",
       " Vanilla Frosty®-ccino(Large)",
       " Chocolate Frosty®-ccino(Small)",
        "Chocolate Frosty®-ccino(Large)",
        "Fresh Brewed Coffee(Small)",
       " Fresh Brewed Coffee(Large)",
       " Fresh Brewed Decaffeinated Coffee(Small)",
       " Fresh Brewed Decaffeinated Coffee(Large)"]
        const data =Numbers.map((res,j)=>{
            return <h5 key={j}>{res}</h5>
        })
        const Num=["$2.39",
        "$2.69",
        "$2.69",
       " $2.99",
       " $2.69",
        "$2.99",
        "$1.39",
       " $1.69",
       " $1.39",
       " $1.69"]
        const pri =Num.map((res,j)=>{
            return <h5 key={j}>{res}</h5>
        })
        return (
            <div className='bord_d'>
                <h1>Dinner Menu</h1>
                 <table class="table table-striped">
                        <thead>
                        <tr>
                            <th>item</th>
                        
                            <th>price</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{data}</td>
                        
                            <td>{pri}</td>
                        </tr>
                        
                        </tbody>
                    </table>
                </div> 
        );

    }
}

export default dinner;