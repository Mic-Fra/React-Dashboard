import React from "react";

<style>
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap');
</style>

export default function MyBalance(){
    return(
        <div className="w-full">
            <div className="bg-[#190F01] h-[180px] md:h-[228px] rounded-3xl p-[16px] md:p-[24px]">
                <div className="h-[180px]">
                    <div className="flex justify-between">
                        <div className="flex flex-col justify-between">
                            <div className="grid grid-cols-1 gap-[6px]">
                                <div className="hanken font-normal text-[16px] md:text-[24px] text-[#FFF7F7] leading-[31.27px]">My Balance</div>
                                <div className="hanken font-bold text-[48px] md:text-[64px] text-[#FFF7F7] leading-[83.39px]">$25,350.52</div>
                            </div>
                            <div className="grid grid-cols-1 h-[26px] md:h-[37px] items-center">
                                <div className="flex h-[16px] md:h-[21px] gap-[1px] xl:gap-[4px] items-center">
                                    <div className="hanken font-normal text-[12px] md:text-[16px] text-[#FFF7F7] leading-[15.64px] xl:leading-[20.85px]">Grow your portfolio</div>
                                    <div className="flex gap-1">
                                        <button className="hanken font-normal text-[12px] md:text-[16px] text-[#C86C00] leading-[20.85px] underline decoration-solid">check latest listed coins</button>
                                        <div className="w-[21px] h-[21px]">
                                            <img src={`/arrowoutward.png`} width={21} height={21} alt="arrow_outward.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="hanken font-extralight text-[8px] md:text-[12px] h-[10px] md:h-[16px] leading-[10.42px] xl:leading-[15.64px] text-[#FFF7F7]">*All values represented in USD</div>
                            </div>
                        </div>
                        <div className=" -mr-[24px] content-center xl:content-end">
                            <img src={"/coin1.png"} width={120} height={120} alt="coin1.png " className="w-[120px] h-[120px] md:w-[180px] md:h-[180px]"/>
                        </div>
                    </div>
                </div>
            </div>  
        </div>        
    )
};

