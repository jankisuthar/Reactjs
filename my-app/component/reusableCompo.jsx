import React, { Component } from 'react';

class reusableCompo extends Component {
    render() {
        return (
            <div>
                 <div className="card">
                    <img src={this.props.imgsrc} alt="" srcset="" className='card-img-top' />
                    <div className="card-body">
                        <div className="row">
                            <div className="col">{this.props.title}</div>
                            <div className="col">
                                <p>old price:$<del>{this.props.oldprice}</del></p>
                                <p>new price:${this.props.newprice}</p>
                            </div>
                            <center><button className="btn btn-primary" >addtocart</button></center>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default reusableCompo;