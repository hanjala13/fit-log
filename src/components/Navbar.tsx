'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '@/assets/logo.png';
import { usePlan } from '@/context/PlanContext';

const Navbar = () => {
    const pathname = usePathname();

    const { plan, saved } = usePlan();

    const isWorkoutPage =
        pathname === '/' || pathname.startsWith('/workout');

    const isPlanPage = pathname.startsWith('/my-plan');

    return (
        <div className="navbar relative min-h-14 border-b border-white/10 bg-[#0B0B0F] px-3 sm:px-4 lg:px-8">

            {/* Mobile Menu + Desktop Logo */}
            <div className="navbar-start">

                {/* Mobile Menu */}
                <div className="dropdown lg:hidden">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-sm px-1 text-white"
                    >
                        <svg
                            aria-label="Menu"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>

                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box bg-[#14141A] p-2 text-white shadow"
                    >
                        <li>
                            <Link href="/">Workouts</Link>
                        </li>

                        <li>
                            <Link href="/my-plan">My Plan</Link>
                        </li>
                    </ul>
                </div>

                {/* Desktop Logo */}
                <Link
                    href="/"
                    className="hidden cursor-pointer items-center gap-2 lg:flex"
                >
                    <Image
                        src={logo}
                        alt="FitLog logo"
                        className="h-5 w-5 object-contain"
                    />

                    <span className="font-oswald text-sm font-extrabold tracking-wide text-white">
                        FITLOG
                    </span>
                </Link>
            </div>

            {/* Mobile Center Logo */}
            <Link
                href="/"
                className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 lg:hidden"
            >
                <Image
                    src={logo}
                    alt="FitLog logo"
                    className="h-5 w-5 object-contain"
                />

                <span className="font-oswald text-sm font-extrabold tracking-wide text-white">
                    FITLOG
                </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="navbar-center hidden lg:flex">
                <ul className="flex items-center gap-2">
                    <li>
                        <Link
                            href="/"
                            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${isWorkoutPage
                                    ? 'bg-[#C6FF00]/15 text-[#C6FF00]'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Workouts
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/my-plan"
                            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${isPlanPage
                                    ? 'bg-[#C6FF00]/15 text-[#C6FF00]'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            My Plan
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Plan + Saved */}
            <div className="navbar-end gap-2 text-[9px] text-gray-300 sm:gap-4 sm:text-[11px]">

                <Link
                    href="/my-plan"
                    className="flex cursor-pointer items-center gap-1 hover:text-white sm:gap-1.5"
                >
                    Plan

                    <span className="grid h-4 min-w-4 place-items-center rounded-full bg-[#C6FF00] px-1 text-[9px] font-bold text-black sm:text-[10px]">
                        {plan.length}
                    </span>
                </Link>

                <Link
                    href="/my-plan"
                    className="flex cursor-pointer items-center gap-1 hover:text-white sm:gap-1.5"
                >
                    Saved

                    <span className="grid h-4 min-w-4 place-items-center rounded-full bg-white/10 px-1 text-[9px] font-bold text-white sm:text-[10px]">
                        {saved.length}
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;