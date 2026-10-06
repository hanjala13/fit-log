import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';

const Navbar = () => {
    return (
        <div className="navbar bg-[#0B0B0F] border-b border-white/10 px-4 lg:px-8 min-h-14">
            {/* Left: logo */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-sm text-white lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-[#14141A] text-white rounded-box z-10 mt-3 w-52 p-2 shadow">
                        <li><a>Workouts</a></li>
                        <li><a>My Plan</a></li>
                    </ul>
                </div>

                <div className="font-oswald flex items-center gap-2 text-sm font-extrabold tracking-wide text-white cursor-pointer">
                    <Image src={logo} alt="FitLog logo" className="h-5 w-5 object-contain" />
                    FITLOG
                </div>
            </div>

            {/* Center: pill tabs */}
            <div className="navbar-center hidden lg:flex">
                <ul className="flex items-center gap-2">
                    <li>
                        <a className="cursor-pointer rounded-full bg-[#C6FF00]/15 px-3 py-1 text-xs font-semibold text-[#C6FF00]">
                            Workouts
                        </a>
                    </li>
                    <li>
                        <a className="cursor-pointer rounded-full px-3 py-1 text-xs font-semibold text-gray-400 hover:text-white">
                            My Plan
                        </a>
                    </li>
                </ul>
            </div>

            {/* Right: Plan / Saved */}
            <div className="navbar-end gap-4 text-[11px] text-gray-300">
                <button className="flex items-center gap-1.5 hover:text-white cursor-pointer">
                    Plan
                    <span className="grid h-4 min-w-4 place-items-center rounded-full bg-[#C6FF00] px-1 text-[10px] font-bold text-black">
                        0
                    </span>
                </button>
                <button className="flex items-center gap-1.5 hover:text-white cursor-pointer">
                    Saved
                    <span className="grid h-4 min-w-4 place-items-center rounded-full bg-white/10 px-1 text-[10px] font-bold text-white">
                        0
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;