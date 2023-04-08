import React from "react";
import "./SectionD.css";

function SectionD(props) {
  return (
    <>
      <div className="containe-flud">
        <div className="hed">
          <h1 className="mt-5 hed_A">Focused on safety, wherever you go</h1>
        </div>
        <div className="rw">
          <div className="row_c row">
            <div className="col-xl-6 mt-5">
              <div className="photo">
                <img
                  src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png"
                  alt=""
                  width="100%"
                />
              </div>
              <h2 className="mt-3 ms-3">Our commitment to your safety</h2>
              <p className="mt-3 ms-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
                possimus minima esse nesciunt est vero, vel sapiente adipisci et
                cum illo. Amet, fuga obcaecati eum minima non dignissimos
                adipisci sequi.
              </p>
              <div className="list ">
                <p className="mt-3 ms-3">Read about our Community Guidelines</p>
                <p className="mt-3 ms-3">See all safety features</p>
              </div>
            </div>
            <div className="col-xl-6  mt-5">
              <div className="photo">
                <img
                  src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png"
                  alt=""
                  width="100%"
                />
              </div>
              <h2 className="mt-3 ms-3">Setting 10,000+ cities in motion</h2>
              <p className="mt-3 ms-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
                possimus minima esse nesciunt est vero, vel sapiente adipisci et
                cum illo. Amet, fuga obcaecati eum minima non dignissimos
                adipisci sequi.
              </p>
              <p className="mt-3 ms-3">See all safety features</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionD;
