import React from "react";

export default function Coin(props){
    const {title, money, percen, imag}=props;

    return(
        <>
        <div className="flex w-[190px] h-[63px] ml-[16px] bg-[#190F01] rounded-[16px] p-[8px] gap-[7px]">
            <div className="mt-[8px] mb-[8px] ml-[8px]">
                <img src={`/${imag}.png`} height={47} width={47} alt={`/${imag}.png`} />
            </div>
            <div className="flex flex-col text-left  h-[47px] ml-[7px] text-[#FFFFFF]">
                <div className="text-[20px] font-bold leading-[26.06px] text-[#FFFFFF]">
                    <button>
                        {title}
                    </button>
                </div>
                <div className="flex w-[120px] h-[21px]">
                    <div className="text-left text-[16px] font-normal leading-[20.85px] text-[#FFFFFF]">
                        {money}
                    </div>
                    <div className="flex items-right ml-auto">
                        <div className="w-[25px] h-[19px] text-right font-normal text-[#4CD10D] text-[16px] leading-[19.36px]">
                            {percen}
                        </div>
                        <div className="w-[19px] h-[19px]">
                            <img src={`/up.png`} height={47} width={47} alt={'up.png'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}