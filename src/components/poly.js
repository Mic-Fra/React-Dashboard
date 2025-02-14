import React from 'react';
import { AreaChart, Area, Tooltip, XAxis, ResponsiveContainer } from "recharts";
import { holdData4 } from './const';

export default function Poly(){
  const data=holdData4;
    return (
      <div className="w-full  bg-[#110a01]">
        <div className="flex flex-row gap-[32px] items-center justify-between">
          <div className="bg-[#110a01] text-white text-left text-[24px] md:text-[32px]">
            PnL Analysis
          </div>
          <div className="w-[161px] h-[27px] rounded-xl bg-[#102407] justify-center flex flex-row">
            <div className="my-auto text-[16px] font-bold font-inter leading-[19.36px] text-[#4CD10D]">
              This Month 5%
            </div>
            <div className="my-auto w-[19px] h-[19px]">
              <img src={`/up.png`} height={47} width={47} alt={'up.png'} />
            </div>
          </div>
        </div>
        <div className="mt-[32px] h-[299px]">
          <ResponsiveContainer width="100%" height={271}>
            <AreaChart
              height={271}
              data={data}
              margin={{
                top: 10,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff7300" stopOpacity={1} />
                  <stop offset="95%" stopColor="#ff7300" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" hide />
              <Tooltip />
              <Area connectNulls type="linear" dataKey="uv" stroke="#C86C00" fill="url(#gradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="h-[299px] text-[#FFF7F7B2] font-normal text-[12px] leading-[15.64px] -mt-[290px]">
          <div className="h-[26.3px]" style={{border:"1.5px dashed #000", borderBlockColor:"white"}}>1000</div>
          <div className="h-[26.3px]">900</div>
          <div className="h-[26.3px]" style={{border:"1.5px dashed #000", borderBlockColor:"white"}}>800</div>
          <div className="h-[26.3px]">700</div>
          <div className="h-[26.3px]" style={{border:"1.5px dashed #000", borderBlockColor:"white"}}>600</div>
          <div className="h-[26.3px]">500</div>
          <div className="h-[26.3px]" style={{border:"1.5px dashed #000", borderBlockColor:"white"}}>400</div>
          <div className="h-[26.3px]">300</div>
          <div className="h-[26.3px]" style={{border:"1.5px dashed #000", borderBlockColor:"white"}}>200</div>
          <div className="h-[26.3px]">100</div>
          <div className="h-[29px] content-center flex flex-row justify-around">
            <div className="content-center text-[12px] font-normal">JAN</div>
            <div className="content-center text-[12px] font-normal">FEB</div>
            <div className="content-center text-[12px] font-normal">MAR</div>
            <div className="content-center text-[12px] font-normal">APR</div>
            <div className="content-center text-[12px] font-normal">MAY</div>
            <div className="content-center text-[12px] font-normal">JUN</div>
            <div className="content-center text-[12px] font-normal">JUL</div>
            <div className="content-center text-[12px] font-normal">AUG</div>
            <div className="content-center text-[12px] font-normal">SEP</div>
            <div className="content-center text-[12px] font-normal">OCT</div>
            <div className="content-center text-[12px] font-normal">NOV</div>
            <div className="content-center text-[12px] font-normal">DEC</div>
          </div>
        </div>
      </div>
    );
  }

