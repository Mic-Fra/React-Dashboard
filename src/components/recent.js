import React from "react";
import { useState } from "react";
import Activitytable from "./activitytable.js";
import { holdData1 } from "./const.js"



export default function Recent(){
  const holdData=holdData1;
  const [count,setCount] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  const visibleItems = holdData.slice(startIndex, startIndex + itemsPerPage);

  const HandlePrevious = () => {
      if(startIndex > 0){
          setStartIndex(startIndex - itemsPerPage);
      }
      setCount(count - 1);

  }

  const HandleNext = () => {
      if((startIndex + itemsPerPage) < holdData.length){
          setStartIndex(startIndex + itemsPerPage);
      }
      setCount(count + 1);
  }

    return(
        <section>
          <div className="bg-[#110a01] h-[400px] xl:h-[515px] gap-[32px] hover:cursor-pointer">
            {/* {Section Recent Activity} */}
            <div className="h-[71px]">
              <div className="h-[39px] font-inter font-bold text-[32px] text-left leading-[38.73px] text-[#FFF7F7]">
                Recent Activity
              </div>
            </div>
            {/* {Swapped} */}
            <div className="h-[288px] xl:h-[403px] gap-[2px]">
            {visibleItems.map((ele)=>(
              <Activitytable title={ele.title} inf={ele.inf} date={ele.date} imag={ele.imag} />
              ))}
            </div>
            {/* {Footer} */}
            <>
            <div className="h-[37px] flex justify-center">
                <button onClick={HandlePrevious} disabled={startIndex === 0} className={`${startIndex === 0 ? "opacity-0 cursor-not-allowed" : "opacity-100"}`}>
                    <img src="/chevron_left.png" width={24} height={24} alt="chevron_left.png"/>
                </button>
                <div className="text-[#C86C00] py-[2.5px] content-center">
                    Page {count} of {Math.ceil(holdData.length / itemsPerPage)}
                </div>
                <button onClick={HandleNext} disabled={(startIndex + itemsPerPage) >= holdData.length} className={`${(startIndex + itemsPerPage) >= holdData.length? "opacity-0 cursor-not-allowed":"opacity-100"}`}>
                    <img src="/chevron_right.png" width={24} height={24} alt="chevron_right.png" />
                </button>
            </div>
            </>
          </div>
        </section>        
    )
}
