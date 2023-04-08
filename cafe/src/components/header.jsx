import React from 'react';
import {
    BrowserRouter as Router,
   
    Route,
    Link,
    Routes
  } from "react-router-dom";
import Brakefast from './brakefast'
import Launch from './launch';
import Dinner from './dinner';
import Home from '../home';

function header() {

    const Numbers={'/home':'home','/brakefast':'Brakefast','/launch':'Launch','/dinner':'Dinner',}
    const returndata = Object.entries(Numbers).map((res,i)=>{
        return   <li className="nav-item">
        <Link className="nav-link" to={res[0]}>{res[1]}</Link>
      </li>
    })
    return (
       <>
       <Router>
       <nav className="navbar navbar-expand-sm bg-dark navbar-info">
  <div className="deep container-fluid">
    <a className="navbar-brand" href="#"><img src="https://fastwpdemo.com/newwp/heritaste/demo/assets/images/logo.png" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
       {returndata}
       
       
      </ul>
    </div>
  </div>
</nav>
<Routes>
    <Route path='/brakefast' element={<Brakefast></Brakefast>}></Route>
    <Route path='/launch' element={<Launch></Launch>}></Route>
    <Route path='/dinner' element={<Dinner></Dinner>}></Route>
    <Route path='/home' element={<Home></Home>}></Route>
   
</Routes>
</Router>
       </>
    );
}

export default header;