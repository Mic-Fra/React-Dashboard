import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    };
    return(
        <header className="bg-[#190F01] w-full h-[50px] md:h-[58px]"  
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 10
            }}>
            <div className="flex flex-row justify-between md:justify-around">
                <img
                    src="/Zwappi.png"
                    alt="/Zwappi.png"
                    className="w-[116px] h-[34px] md:w-[152px] md:h-[42px] my-[8px] ml-[8px] md:ml-[80px]"
                />
                {/* Original Buttons (hidden on small screens) */}
                <div className="justify-around w-[330px] h-[29px] gap-[12px] my-[14.5px] hidden md:flex">
                    <div className="text-[16px] text-[#FFF7F7] font-normal leading-[20.85px] hover:text-[#C86C00]" >
                        <NavLink to="/swap" className={({ isActive }) =>isActive ? "text-[#C86C00] font-normal rounded border-b-4 border-[#C86C00]" : "text-[#FFF7F7] font-normal"}>
                            Swap
                        </NavLink>
                    </div>
                    <div className="text-[16px] text-[#FFF7F7] font-normal leading-[20.85px] hover:text-[#C86C00]" >
                        <NavLink to="/Bridge" className={({ isActive }) =>isActive ? "text-[#C86C00] font-normal rounded border-b-4 border-[#C86C00]" : "text-[#FFF7F7] font-normal"}>
                            Bridge
                        </NavLink>
                    </div>
                    <div className="text-[16px] text-[#FFF7F7] font-normal leading-[20.85px] hover:text-[#C86C00]" >
                        <NavLink to="/Dashboard" className={({ isActive }) =>isActive ? "text-[#C86C00] font-normal rounded border-b-4 border-[#C86C00]" : "text-[#FFF7F7] font-normal"}>
                            Dashboard
                        </NavLink>
                    </div>
                    <div className="text-[16px] text-[#FFF7F7] font-normal leading-[20.85px] hover:text-[#C86C00]" >
                        <NavLink to="/Analytics" className={({ isActive }) =>isActive ? "text-[#C86C00] font-normal rounded border-b-4 border-[#C86C00]" : "text-[#FFF7F7] font-normal"}>
                            Analytics
                        </NavLink>
                    </div>
                </div>
                <img
                    src="/lens.png"
                    alt="/lens.png"
                    className="w-[200px] h-[34px] my-[12px] mr-[8px] md:mr-[80px] hidden md:block"
                />
                <div className="flex flex-row items-center md:hidden">
                    {/* New Style Button (visible on small screens) */}
                    <div className="flex md:hidden">
                        <button onClick={toggleMenu}>
                            <img
                                src="/logo.png"
                                alt="/logo.png"
                                className="w-[58px] h-[34px] my-[8px] mr-[8px] md:mr-[80px]"
                            />
                        </button>
                        <div className={`absolute left-0 w-full bg-[#190f01] mt-[50px] border rounded-2xl shadow-xl transition-opacity duration-300 ease-in-out z-10 ${
                          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}  >
                            <ul className="gap-[12px]">
                                <li className="px-4 py-2">
                                    <img
                                        src="/lens.png"
                                        alt="/lens.png"
                                        className="h-[34px] my-[8px]"
                                    />
                                </li>
                                <li className="px-4 py-2 text-white text-[16px] text-right hover:text-[#C86C00] hover:underline">
                                    <NavLink to="/swap" onClick={() => setIsMenuOpen(false)} className={({ isActive }) =>isActive ? "text-[#C86C00] font-normal rounded border-b-4 border-[#C86C00]" : "text-[#FFF7F7] font-normal"}>
                                        Swap
                                    </NavLink>
                                </li>
                                <li className="px-4 py-2 text-white text-[16px] text-right hover:text-[#C86C00] hover:underline">
                                    <NavLink to="/Bridge" onClick={() => setIsMenuOpen(false)} className={({ isActive }) =>isActive ? "text-[#C86C00] font-normal rounded border-b-4 border-[#C86C00]" : "text-[#FFF7F7] font-normal"}>
                                        Bridge
                                    </NavLink>
                                </li>
                                <li className="px-4 py-2 text-white text-[16px] text-right hover:text-[#C86C00] hover:underline">
                                    <NavLink to="/Dashboard" onClick={() => setIsMenuOpen(false)} className={({ isActive }) =>isActive ? "text-[#C86C00] font-normal rounded border-b-4 border-[#C86C00]" : "text-[#FFF7F7] font-normal"}>
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li className="px-4 py-2 text-white text-[16px] text-right hover:text-[#C86C00] hover:underline">
                                    <NavLink to="/Analytics" onClick={() => setIsMenuOpen(false)} className={({ isActive }) =>isActive ? "text-[#C86C00] font-normal rounded border-b-4 border-[#C86C00]" : "text-[#FFF7F7] font-normal"}>
                                        Analytics
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}