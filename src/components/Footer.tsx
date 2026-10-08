import Image from 'next/image';
import logo from '@/assets/logo.png';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-[#0B0B0F]">
            <div className="mx-auto flex min-h-12.5 w-full items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src={logo}
                        alt="FitLog logo"
                        className="h-4 w-4 object-contain sm:h-5 sm:w-5"
                    />

                    <span className="font-oswald text-[10px] font-bold tracking-wide text-white sm:text-xs">
                        FITLOG
                    </span>
                </div>

                {/* Copyright */}
                <p className="text-right text-[8px] text-gray-500 sm:text-[10px]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;