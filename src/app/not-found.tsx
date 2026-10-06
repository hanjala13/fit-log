const NotFound = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#0B0B0F] px-4 text-center text-white">
            <div>
                <p className="text-6xl font-bold text-[#C6FF00]">404</p>

                <h1 className="mt-4 text-2xl font-bold">
                    PAGE NOT FOUND
                </h1>

                <p className="mt-2 text-sm text-gray-400">
                    The page you are looking for does not exist.
                </p>
            </div>
        </div>
    );
};

export default NotFound;