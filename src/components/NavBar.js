const NavMenuLink = ({ children, href }) => {
    return (
        <a href={href} className="block py-3 px-4 box-border hover:bg-bgMedium">
            {children}
        </a>
    );
};

export default function NavBar() {
    // TOGGLE SIDE NAV
    const toggleNavMenu = () => {
        let navMenu = document.getElementById("nav-menu");
        let navMenuBtn = document.getElementById("nav-menu-btn");
        navMenu.classList.toggle("scale-y-0");
        navMenuBtn.classList.toggle("bg-bgMedium");
    };

    window.addEventListener("resize", () => {
        try {
            let navMenu = document.getElementById("nav-menu");
            if (window.innerWidth > 768 && !navMenu.classList.contains("scale-y-0")) {
                navMenu.classList.add("scale-y-0");
            }
        } catch (error) {}
    });

    document.onclick = function (e) {
        try {
            let navMenu = document.getElementById("nav-menu");
            let navMenuBtn = document.getElementById("nav-menu-btn");
            if (!navMenu.contains(e.target) && !navMenuBtn.contains(e.target)) {
                navMenu.classList.add("scale-y-0");
            }
        } catch (error) {}
    };

    return (
        <>
            <div className="px-2 sticky top-2">
                {/* Main Nav */}
                <nav
                    id="main-nav"
                    className="flex justify-between mx-auto max-w-screen-2xl bg-bgDark h-16 px-6 py-2 rounded text-white font-primary z-10">
                    {/* nav left */}
                    <div className="flex items-center">
                        <img src="https://www.placehold.co/300x300" alt="Logo" className="h-10 w-10" />
                        <h1 className="ml-6 font-bold text-xl sm:text-3xl">Justin Carl Castro</h1>
                    </div>

                    <button
                        id="nav-menu-btn"
                        className="md:hidden flex items-center px-3 rounded hover:bg-bgMedium hover:scale-110 transition colors"
                        onClick={toggleNavMenu}>
                        <svg className="h-8 2-8" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 4h18v2H3V4Zm0 7h18v2H3v-2Zm0 7h18v2H3v-2Z"></path>
                        </svg>
                    </button>

                    {/* nav middle */}
                    <ul className="hidden md:flex items-center gap-4 font-bold text-l uppercase">
                        <li>
                            <a
                                href="/link"
                                className="border-0 border-b-2 px-2 py-1 border-transparent hover:border-white transition colors">
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/link"
                                className="border-0 border-b-2 px-2 py-1 border-transparent hover:border-white transition colors">
                                About Me
                            </a>
                        </li>
                        <li>
                            <a
                                href="/link"
                                className="border-0 border-b-2 px-2 py-1 border-transparent hover:border-white transition colors">
                                Projects
                            </a>
                        </li>
                    </ul>

                    <div className="hidden items-center font-bold text-l uppercase lg:flex">
                        <button className="overflow-hidden relative w-38 p-2 h-12 bg-bgMedium text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
                            <p>Get In Touch</p>
                            <span className="absolute w-40 h-32 -top-8 -left-2 bg-blue-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
                            <span className="absolute w-40 h-32 -top-8 -left-2 bg-blue-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
                            <span className="absolute w-40 h-32 -top-8 -left-2 bg-primary rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
                            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                                <p className="flex items-center gap-4">
                                    Email
                                    <svg
                                        fill="currentColor"
                                        className="w-6 h-6 inline"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 20.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16.007ZM4.434 5 12 11.81 19.566 5H4.434ZM0 15h8v2H0v-2Zm0-5h5v2H0v-2Z" />
                                    </svg>
                                </p>
                            </span>
                        </button>
                    </div>
                </nav>

                {/* Mobile Nav Menu */}
                <div className="relative max-w-screen-2xl">
                    <nav
                        id="nav-menu"
                        className="absolute -top-1 right-0 w-64 bg-bgDark rounded-b transition-transform scale-y-0 origin-top-right z-9">
                        <ul className="text-white font-primary font-bold text-center uppercase pt-1">
                            <li>
                                <NavMenuLink href="/">Home</NavMenuLink>
                            </li>
                            <li>
                                <NavMenuLink href="/projects">Project</NavMenuLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
