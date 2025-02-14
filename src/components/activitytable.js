import React  from "react";

export default function Activitytable(props) {
 const {title, inf, date, imag} = props;

    return(
        <>
        {/* {Swapped} */}
        <div className="flex h-[56px] xl:h-[79px] rounded-[16px] justify-between group hover:bg-[#C86C00] hover:bg-opacity-10 duration-300 ease-in-out hover:cursor-pointer">
            <div className="w-[73px] h-[40px] xl:w-[105px] xl:h-[60px] ml-[8px] mt-[12px] xl:mt-[16px]">
                <img src={`/${imag}.png`} height={60} width={105} alt={`${imag}.png`} />
            </div>
            <div className="text-[#FFF7F7] w-full h-[40px] xl:h-[63px] my-[8px] xl:my-[10px] duration-300 ease-in-out">
                <div className="flex flex-col">
                    <div className="flex xl:mt-[4px] h-[19px] xl:h-[24px] justify-between">
                        <div className="font-inter font-bold text-[16px] xl:text-[20px] h-[24px] leading-[24.2px] text-left">
                            <div className="group-hover:text-[#C86C00] duration-300 ease-in-out">
                                {title}
                            </div>
                        </div>
                        <div className="text-right text-[12px] font-inter font-normal h-[15px] justify-end leading-[14.52px] my-[4.5px] duration-300 ease-in-out">
                            {date}
                        </div>
                    </div>
                    <div className="flex h-[15px] xl:h-[19px] font-inter text-left mt-[4px] xl:mt-[12px] gap-[4px] xl:gap-[8px]">
                        <div className=" text-left text-[12px] xl:text-[16px] font-inter font-bold leading-[19.36px] duration-300 ease-in-out">
                            {inf.split(" ")[0]}
                        </div>
                        <div className="text-left font-inter font-normal text-[12px] xl:text-[16px]  leading-[19.36px] duration-300 ease-in-out">
                            {inf.split(" ")[1]}
                        </div>
                        <div className="text-left text-[12px] xl:text-[16px] font-inter font-bold  leading-[19.36px] duration-300 ease-in-out">
                            {inf.split(" ")[2]}
                        </div>
                    </div>  
               </div>
            </div>
            <div className="mt-[34px] mb-[8px] group-hover:-translate-y-2 justify-end duration-300 ease-in-out">
                <img src="arrow.png" height={21} width={21} alt="arrow.png"/>            
            </div>
        </div>
      </>  
    );
}