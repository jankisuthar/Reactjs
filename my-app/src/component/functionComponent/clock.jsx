import React from "react";
import { useState } from "react";
import useEffact from "./useEffact";

function Clock(props) {
  const [time, settime] = useState(new Date());

  // useEffact(()=>{
  //  const timeA = setInterval(()=>{
  //     settime(new Date(),1*1000)
  //  })
  const timeA = setInterval(() => {
    settime(new Date(), 1 * 1000);
    return () => {
      clearInterval(timeA);
    };
  });

  return (
    <div>
      <div class="digital-clock">{time.toLocaleTimeString()}</div>
    </div>
  );
}

export default Clock;
