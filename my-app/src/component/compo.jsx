import React, { Component } from 'react';
import ReusableCompo from './reusableCompo';
class compo extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row" mt-5>
                    <div className="col-3">
                        <ReusableCompo imgsrc="img/apple.jpeg" title="apple 14 pro" oldprice="90000" newprice="70000" />
                    </div>
                    <div className="col-3">
                        <ReusableCompo imgsrc="img/apple.jpeg" title="apple" oldprice="90000" newprice="70000" />
                    </div>
                    <div className="col-3">
                        <ReusableCompo imgsrc="img/apple.jpeg" title="apple" oldprice="90000" newprice="70000" />
                    </div>
                    <div className="col-3">
                        <ReusableCompo imgsrc="img/apple.jpeg" title="apple" oldprice="90000" newprice="70000" />
                    </div>
                    <div className="col-3">
                        <ReusableCompo imgsrc="img/apple.jpeg" title="apple" oldprice="90000" newprice="70000" />
                    </div>
                    <div className="col-3">
                        <ReusableCompo imgsrc="img/apple.jpeg" title="apple" oldprice="90000" newprice="70000" />
                    </div>
                    <div className="col-3">
                        <ReusableCompo imgsrc="img/apple.jpeg" title="apple" oldprice="90000" newprice="70000" />
                    </div>
                    <div className="col-3">
                        <ReusableCompo imgsrc="img/apple.jpeg" title="apple" oldprice="90000" newprice="70000" />
                    </div>
                </div>
            </div>
        );
    }
}

export default compo;