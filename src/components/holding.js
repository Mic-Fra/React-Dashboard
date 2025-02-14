import React, { useState } from "react";
import { holdData2 } from "./const.js"
import Holdingtable from "./holdingtable.js";

export default function Holding(){
    const [count,setCount] = useState(1);
    const [startIndex, setStartIndex] = useState(0);
    const [holdData, setHoldData]=useState(holdData2);
    const [assetBtn, setAssetBtn]=useState(true);
    const [balanceBtn, setBalanceBtn]=useState(true);
    const [priceBtn, setPriceBtn]=useState(true);
    const [valueBtn, setValueBtn]=useState(true);
    const [assetUp, setAssetUp]=useState(false);
    const [assetDown, setAssetDown]=useState(false);
    const [balanceUp, setBalanceUp]=useState(false);
    const [balanceDown, setBalanceDown]=useState(false);
    const [priceUp, setPriceUp]=useState(false);
    const [priceDown, setPriceDown]=useState(false);
    const [valueUp, setValueUp]=useState(false);
    const [valueDown, setValueDown]=useState(false);
    
    const AssetSortIn =() =>{
        setHoldData((holdData) => 
        [...holdData].sort((a, b) => a.assetName1.localeCompare(b.assetName1))
    );
        setAssetBtn((prev)=>!prev)
        setAssetUp(true)
        setAssetDown(false)
        setBalanceUp(false)
        setBalanceDown(false)
        setPriceUp(false)
        setPriceDown(false)
        setValueUp(false)
        setValueDown(false)
    }
    

    const AssetSortDe =() =>{
        setHoldData((holdData) => 
        [...holdData].sort((a, b) => b.assetName1.localeCompare(a.assetName1))
    );
        setAssetBtn((prev)=>!prev)
        setAssetUp(false)
        setAssetDown(true)
        setBalanceUp(false)
        setBalanceDown(false)
        setPriceUp(false)
        setPriceDown(false)
        setValueUp(false)
        setValueDown(false)
    }
    
    const BalanceSortDe = () => {
        setHoldData((holdData) => [...holdData].sort((a, b) => {
            const balanceA = typeof a.balance === "string" ? parseFloat(a.balance.replace(/,/g, "")) : a.balance;
            const balanceB = typeof b.balance === "string" ? parseFloat(b.balance.replace(/,/g, "")) : b.balance;
    
            return balanceA - balanceB; // Ascending order
        }));
        setBalanceBtn((prev)=>!prev)
        setAssetUp(false)
        setAssetDown(false)
        setBalanceUp(false)
        setBalanceDown(true)
        setPriceUp(false)
        setPriceDown(false)
        setValueUp(false)
        setValueDown(false)
    };

    const BalanceSortIn = () => {
        setHoldData((holdData) => [...holdData].sort((a, b) => {
            const balanceA = typeof a.balance === "string" ? parseFloat(a.balance.replace(/,/g, "")) : a.balance;
            const balanceB = typeof b.balance === "string" ? parseFloat(b.balance.replace(/,/g, "")) : b.balance;
    
            return balanceB - balanceA ; // Ascending order
        }));
        setBalanceBtn((prev)=>!prev)
        setAssetUp(false)
        setAssetDown(false)
        setBalanceUp(true)
        setBalanceDown(false)
        setPriceUp(false)
        setPriceDown(false)
        setValueUp(false)
        setValueDown(false)
    };

    const PriceSortIn = () => {
        setHoldData((holdData) => [...holdData].sort((a, b) => {
            const priceA = typeof a.price === "string" ? parseFloat(a.price.replace(/\$/g, "").replace(/,/g, "")) : a.price;
            const priceB = typeof b.price === "string" ? parseFloat(b.price.replace(/\$/g, "").replace(/,/g, "")) : b.price;
    
            return priceB - priceA ; // Ascending order
        }));
        setPriceBtn((prev)=>!prev)
        setAssetUp(false)
        setAssetDown(false)
        setBalanceUp(false)
        setBalanceDown(false)
        setPriceUp(true)
        setPriceDown(false)
        setValueUp(false)
        setValueDown(false)
    };

    const PriceSortDe = () => {
        setHoldData((holdData) => [...holdData].sort((a, b) => {
            const priceA = typeof a.price === "string" ? parseFloat(a.price.replace(/\$/g, "").replace(/,/g, "")) : a.price;
            const priceB = typeof b.price === "string" ? parseFloat(b.price.replace(/\$/g, "").replace(/,/g, "")) : b.price;
    
            return priceA - priceB ; // Ascending order
        }));
        setPriceBtn((prev)=>!prev)
        setAssetUp(false)
        setAssetDown(false)
        setBalanceUp(false)
        setBalanceDown(false)
        setPriceUp(false)
        setPriceDown(true)
        setValueUp(false)
        setValueDown(false)
    };

    const ValueSortIn = () => {
        setHoldData((holdData) => [...holdData].sort((a, b) => {
            const valueA = typeof a.value === "string" ? parseFloat(a.value.replace(/\$/g, "").replace(/,/g, "")) : a.value;
            const valueB = typeof b.value === "string" ? parseFloat(b.value.replace(/\$/g, "").replace(/,/g, "")) : b.value;
    
            return valueB - valueA ; // Ascending order
        }));
        setValueBtn((prev)=>!prev)
        setAssetUp(false)
        setAssetDown(false)
        setBalanceUp(false)
        setBalanceDown(false)
        setPriceUp(false)
        setPriceDown(false)
        setValueUp(true)
        setValueDown(false)
    };

    const ValueSortDe = () => {
        setHoldData((holdData) => [...holdData].sort((a, b) => {
            const valueA = typeof a.value === "string" ? parseFloat(a.value.replace(/\$/g, "").replace(/,/g, "")) : a.value;
            const valueB = typeof b.value === "string" ? parseFloat(b.value.replace(/\$/g, "").replace(/,/g, "")) : b.value;
    
            return valueA - valueB ; // Ascending order
        }));
        setValueBtn((prev)=>!prev)
        setAssetUp(false)
        setAssetDown(false)
        setBalanceUp(false)
        setBalanceDown(false)
        setPriceUp(false)
        setPriceDown(false)
        setValueUp(false)
        setValueDown(true)
    };
    

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
    const itemsPerPage = 10;

    const visibleItems = holdData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section>
            <div className="h-[595px] xl:h-[515px] bg-[#110a01]">
                <div className="h-[39px] font-inter font-bold text-[32px] text-left leading-[38.73px] text-[#FFF7F7]">Your holdings</div>
                <div className="h-[37px] mt-[32px] rounded-t-2xl flex-col">
                    <div className="h-[37px] rounded-t-2xl flex flex-row justify-around bg-[#190f01]">
                        <div className="py-2 w-[244px] xl:w-[328px]  gap-2 flex flex-row justify-center">
                            <div className="h-[21px] font-['Hanken Grotesk'] font-bold text-[16px] leading-[20.85px] text-right text-[#FFF7F7] hover:text-[#a75b00]"><button onClick={assetBtn? AssetSortIn:AssetSortDe}>Asset</button></div>
                            <div className="w-[10px] h-[14px] flex flex-col">
                                <div onClick={AssetSortIn} className="w-[10px] h-[5px] mt-1 ml-[0.5px]">
                                    {assetUp? <img src={`/changed_up.png`} width={10} height={5} alt="changed_up.png" />:<img src={`/arrow_drop_up.png`} width={10} height={5} alt="arrow_up_down.png" />}
                                </div>
                                <div onClick={AssetSortDe} className="mt-1 ml-[0.5px]">
                                    {assetDown? <img src={`/changed_down.png`} width={10} height={5} alt="changed_down.png" />:<img src={`/arrow_drop_down.png`} width={10} height={5} alt="arrow_up_down.png" />}
                                </div>
                            </div>
                        </div>
                        <div className="py-2 w-[100px] gap-2 flex flex-row justify-center">
                            <div className="w-[58px] h-[21px] font-['Hanken Grotesk'] font-bold text-[16px] text-right text-[#FFF7F7] leading-[20.85px] hover:text-[#a75b00]"><button onClick={balanceBtn? BalanceSortIn:BalanceSortDe}>Balance</button></div>
                            <div className="w-[10px] h-[14px] flex flex-col">
                                <div onClick={BalanceSortIn} className="w-[10px] h-[5px] mt-1 ml-[0.5px]">
                                    {balanceUp? <img src={`/changed_up.png`} width={10} height={5} alt="changed_up.png" />:<img src={`/arrow_drop_up.png`} width={10} height={5} alt="arrow_up_down.png" />}
                                </div>
                                <div onClick={BalanceSortDe} className="mt-1 ml-[0.5px]">
                                    {balanceDown? <img src={`/changed_down.png`} width={10} height={5} alt="changed_down.png" />:<img src={`/arrow_drop_down.png`} width={10} height={5} alt="arrow_up_down.png" />}
                                </div>
                            </div>
                        </div>
                        <div className="py-2 w-[100px] gap-2 flex-row justify-center hidden xl:flex">
                            <div className="h-[21px] font-['Hanken Grotesk'] font-bold text-[16px] text-right text-[#FFF7F7] leading-[20.85px] hover:text-[#a75b00]"><button onClick={priceBtn? PriceSortIn:PriceSortDe}>Price</button></div>
                            <div className="w-[10px] h-[14px] flex flex-col">
                                <div onClick={PriceSortIn} className="w-[10px] h-[5px] mt-1 ml-[0.5px]">
                                    {priceUp? <img src={`/changed_up.png`} width={10} height={5} alt="changed_up.png" />:<img src={`/arrow_drop_up.png`} width={10} height={5} alt="arrow_up_down.png" />}
                                </div>
                                <div onClick={PriceSortDe} className="mt-1 ml-[0.5px]">
                                    {priceDown? <img src={`/changed_down.png`} width={10} height={5} alt="changed_down.png" />:<img src={`/arrow_drop_down.png`} width={10} height={5} alt="arrow_up_down.png" />}
                                </div>
                            </div>
                        </div>
                        <div className="py-2 w-[100px] gap-2 flex-row justify-center hidden xl:flex">
                            <div className="w-[41px] h-[21px] font-['Hanken Grotesk'] font-bold text-[16px] text-right text-[#FFF7F7] leading-[20.85px] hover:text-[#a75b00]"><button onClick={valueBtn? ValueSortIn:ValueSortDe}>Value</button></div>
                            <div className="w-[10px] h-[14px] flex flex-col">
                                <div onClick={ValueSortIn} className="w-[10px] h-[5px] mt-1 ml-[0.5px]">
                                    {valueUp? <img src={`/changed_up.png`} width={10} height={5} alt="changed_up.png" />:<img src={`/arrow_drop_up.png`} width={10} height={5} alt="arrow_up_down.png" />}
                                </div>
                                <div onClick={ValueSortDe} className="mt-1 ml-[0.5px]">
                                    {valueDown? <img src={`/changed_down.png`} width={10} height={5} alt="changed_down.png" />:<img src={`/arrow_drop_down.png`} width={10} height={5} alt="arrow_up_down.png" />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="h-[450px] xl:h-[370px] flex flex-col">
                {visibleItems.map((ele,index) => (
                    <div key={index}>
                        <Holdingtable iconImg={ele.iconImg}
                            assetName1={ele.assetName1}
                            assetName2={ele.assetName2}
                            balance={ele.balance}
                            price={ele.price}
                            value={ele.value}
                        />
                     </div>
                ))}
            </div>
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
            </div>
        </section>
    );
}