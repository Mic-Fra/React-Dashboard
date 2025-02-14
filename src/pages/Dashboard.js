import '../App.css';  
import React from "react";
import Movers from "../components/movers.js"
import MyBalance from "../components/mybalance.js";
import Holding from "../components/holding.js";
import Recent from "../components/recent.js";
import Poly from "../components/poly.js";

export default function Dashboard(){
  return (
    <div>
      <div className="h-[0px] xl:h-[48px]"></div>
      <div className="mt-[32px] grid grid-cols-1 xl:grid-cols-2 gap-[24px] row-gap-[32px] mx-[8px] xl:mx-[80px] shadow-lg">
        <div className="mt-[32px] xl:mt-[0px] grid grid-cols-1 gap-[32px]">
          <MyBalance />
          <Movers />
        </div>
        <div className="mt-[24px] xl:mt-[0px] grid-1">
          <Poly />
        </div>
        <div className="mt-[32px] xl:mt-[0px] grid-1">
          <Holding />
        </div>
        <div className="mt-[24px] xl:mt-[0px] grid-1">
          <Recent />
        </div>
      </div>
    </div>   
  )  
}