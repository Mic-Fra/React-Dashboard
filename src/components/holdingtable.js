import React  from "react";

export default function Holdingtable(props) {
 const {iconImg, assetName1, assetName2, balance, price, value} = props;

    return(
        <>
        <div className="flex flex-row h-[45px] xl:h-[37px] group mx-[20px] xl:mx-[0px] transition-colors duration-300 ease-in-out justify-between xl:justify-around  hover:bg-[#190f01] hover:cursor-pointer">
            <div className="py-1 w-[328px] flex flex-row">
                <div className="pl-2 content-center">
                    <img src={`${iconImg}`} width={29} height={29} alt="Frame1163" />
                </div>
                <div className="ml-[4px] xl:ml-[8px] xl:my-[4px] grid grid-cols-1 justify-start xl:grid-cols-2">
                    <div className="hanken font-bold text-[16px] text-[#FFF7F7]  group-hover:text-[#a75b00] leading-[20.85px]"><button>{assetName1}</button></div>
                    <div className="hanken font-normal text-[12px] text-[#FFF7F7]  xl:ml-[9px] group-hover:text-[#a75b00] xl:text-[16px] leading-[20.85px] text-left">{assetName2}</div>
                </div>
            </div>
            <div className="py-2 w-[100px] flex flex-col xl:flex-row justify-center">
                <div className="hanken font-normal text-right text-[16px] text-[#FFF7F7] leading-[20.85px] group-hover:text-[#a75b00]">{balance}</div>
                <div className="xl:hidden hanken font-extralight text-right text-[12px] text-[#FFF7F7] leading-[15.64px] opacity-80 group-hover:text-[#a75b00]">{price}</div>
            </div>
            <div className="py-2 w-[100px] justify-center hidden xl:flex">
                <div className="hanken font-normal text-[16px] text-[#FFF7F7] leading-[20.85px] group-hover:text-[#a75b00]">{price}</div>
            </div>
            <div className="py-2 w-[100px] justify-center hidden xl:flex">
                <div className="hanken font-normal text-[16px] text-[#FFF7F7] leading-[20.85px] group-hover:text-[#a75b00]">{value}</div>
            </div>
        </div>
      </>  
    );
}