
const FinalSection = () => {
    return (
        <div className="text relative snap-center min-w-full bg-gradient-to-br from-black to-gray-900 text-white flex flex-col items-center justify-center px-6 py-20 text-center">

            <h2 className=" text-6xl font-bold tracking-wide mb-6">
                Ready to Capture the Future?
            </h2>

            <p className="text-[21px] text-gray-300 max-w-2xl mb-8">
                Unleash unmatched precision, speed & innovation with Sony Alpha.
                Step into the world of mirrorless excellence.
            </p>

            <button
                onClick={() =>
                    window.open(
                        "https://electronics.sony.com/imaging/interchangeable-lens-cameras/all-interchangeable-lens-cameras/p/ilce9m3b",
                        "_blank"
                    )
                }
                className="bg-gradient-to-br from-purple-700 to-black/60 text-white px-8 py-3 rounded-full font-semibold text-md shadow-lg hover:scale-105 transition cursor-pointer"
            >
                Experience Alpha 9 III →
            </button>


            {/* Footer */}
            <div className="mt-16 border-t border-gray-700 pt-6 w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 gap-6 px-4">

                {/* Sony Logo Left */}
                <div className="flex items-center gap-4">
                    <img src="/sony.png" alt="Sony Logo" className="w-24" />
                    <p className="hidden sm:block">© 2025 Sony Corporation. All rights reserved.</p>
                </div>

                {/* Social Icons Right */}
                <div className="flex items-center gap-5">

                    {/* YouTube */}
                    <a href="https://www.youtube.com/sony" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <svg className="w-5 h-5 fill-current text-red-500 hover:scale-110 transition" viewBox="0 0 24 24"><path d="M19.6 3H4.4C3.1 3 2 4.1 2 5.4v13.2C2 19.9 3.1 21 4.4 21h15.2c1.3 0 2.4-1.1 2.4-2.4V5.4C22 4.1 20.9 3 19.6 3zM10 15.5V8.5L16 12l-6 3.5z" /></svg>
                    </a>

                    {/* Instagram */}
                    <a href="https://www.instagram.com/sony" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <svg className="w-5 h-5 fill-current text-pink-400 hover:scale-110 transition" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.5A4.26 4.26 0 0 0 3.5 7.75v8.5A4.26 4.26 0 0 0 7.75 20.5h8.5a4.26 4.26 0 0 0 4.25-4.25v-8.5A4.26 4.26 0 0 0 16.25 3.5h-8.5Zm8.5 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" /></svg>
                    </a>

                    {/* Twitter / X */}
                    <a href="https://twitter.com/sony" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <svg className="w-5 h-5 fill-current text-blue-400 hover:scale-110 transition" viewBox="0 0 24 24"><path d="M22.46 6.01c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.38 8.66 8.66 0 0 1-2.73 1.04 4.27 4.27 0 0 0-7.3 3.9A12.13 12.13 0 0 1 3.16 4.9a4.27 4.27 0 0 0 1.32 5.7 4.2 4.2 0 0 1-1.93-.53v.05a4.28 4.28 0 0 0 3.43 4.19 4.3 4.3 0 0 1-1.92.07 4.28 4.28 0 0 0 3.99 2.97A8.58 8.58 0 0 1 2 19.54a12.07 12.07 0 0 0 6.56 1.92c7.87 0 12.18-6.52 12.18-12.18 0-.19 0-.37-.01-.56a8.7 8.7 0 0 0 2.13-2.21Z" /></svg>
                    </a>

                    {/* Facebook */}
                    <a href="https://www.facebook.com/sony" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <svg className="w-5 h-5 fill-current text-blue-600 hover:scale-110 transition" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.5 9.87v-7h-2v-2.87h2v-2.2c0-2 1.2-3.13 3-3.13.87 0 1.8.15 1.8.15v2h-1.02c-1 0-1.32.63-1.32 1.28v1.9h2.3L15.5 15h-2v7A10 10 0 0 0 22 12Z" /></svg>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/company/sony" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg className="w-5 h-5 fill-current text-blue-500 hover:scale-110 transition" viewBox="0 0 24 24"><path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8.34 19H5.67V9.5h2.67V19ZM7 8.2A1.55 1.55 0 1 1 8.55 6.65 1.56 1.56 0 0 1 7 8.2Zm12 10.8h-2.67v-4.53c0-1.08-.39-1.82-1.37-1.82a1.48 1.48 0 0 0-1.39 1A1.89 1.89 0 0 0 13.5 14V19H10.83s.04-8.24 0-9.1h2.67v1.29a2.66 2.66 0 0 1 2.41-1.33c1.76 0 3.09 1.15 3.09 3.63V19Z" /></svg>
                    </a>
                </div>

                {/* Mobile view copyright */}
                <p className="sm:hidden text-center">© 2025 Sony Corporation. All rights reserved.</p>
            </div>


        </div>
    )
}

export default FinalSection