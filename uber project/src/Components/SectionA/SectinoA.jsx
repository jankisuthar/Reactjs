import React from "react";
import "./Section.css";
import { useState } from "react";
import Ride from "../../img/ride.png";
import Drive from "../../img/dirve.jpg";


function SectinoA(props) {
  const [background, setBackground] = useState(Ride);
  const [data,setdata]= useState(<div className="container">
  <div className="col-12  mt-5">
    <h1>Request a ride now</h1>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label"></label>
<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
</div>
<div class="mb-3">
<label for="exampleFormControlTextarea1" class="form-label"></label>
<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
</div>
<button type="button" class="btn btn-primary me-5">Request now</button>
<button type="button" class="btn btn-secondary ">schedule for leter</button>
  </div>
</div>)
  const css = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  function click() {
    setBackground(Ride);
    setdata(<div className="container">
    <div className="col-12  mt-5">
      <h1>Request a ride now</h1>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"></label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"></label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
</div>
<button type="button" class="btn btn-primary me-5">Request now</button>
<button type="button" class="btn btn-secondary ">schedule for leter</button>
    </div>
  </div>)
  }
  function clicka() {
    setBackground(Drive);
    setdata(<div className="mt-5">

        <h1 className="mt-3 get ">Get in the driver’s seat and get paid</h1>
        <p className="mt-3">Drive on the platform with the largest network of active riders.

</p>
<button type="button" class="btn btn-secondary mt-3 ">schedule for leter</button>

    </div>)
  }

  return (
    <>
      <div className="container-flud row mybg " style={css}>
        <div className="left col-lg-6">
          <div className=" form col-8 mt-5 row">
            <div className="left_A col-6">
              <div className="item mt-2" onClick={() => click()}>
              <i class="fa-solid fa-car"></i> <br></br>
                <span>Ride</span>{" "}
              </div>
            </div>
            <div className="right_B col-6">
              <div className="item mt-2" onClick={() => clicka()}>
              <i class="fa-solid fa-signal"></i><br></br>
                <span>Drive or Deliver</span>
              </div>
            </div>
            <div className="form">{data}</div>
          </div>
        </div>
        <div className="col-lg-6"></div>
      </div>
    </>
  );
}

export default SectinoA;
