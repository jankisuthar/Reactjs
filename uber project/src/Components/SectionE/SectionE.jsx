import React from "react";
import "./SectionE.css";
import { useState } from "react";
import Api from "./api";
function SectionE(props) {
  const [deep, setdeep] = useState(Api);
  console.log(deep);
  return (
    <div>
      <div className="rw mt-5 ms-3">
        <div className="row_c row">
          {deep.map((val) => {
            const { id, logo, title, info, link } = val;
            return (
              <div className="col-xl-4">
                <h3>
                  <i className={`font-icon ${logo}`}></i>
                </h3>
                <h2>{val.title}</h2>
                <p>{val.info}</p>
                <p className="mt-5">{val.link}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SectionE;
