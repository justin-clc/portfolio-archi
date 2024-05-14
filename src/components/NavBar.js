import React, { useState, useEffect } from "react"; // Import useState and useEffect hooks

const NavMenuLink = ({ children, href }) => {
  return (
    <a href={href} className="box-border block px-4 py-3 hover:bg-bgMedium">
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

  const [content, setContent] = useState({});

  useEffect(() => {
    const contentful = require("contentful");

    const client = contentful.createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE,
      environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT, // defaults to 'master' if not set
      accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    });

    client
      .getEntries({ content_type: "landingContent" }) // Specify content type 'project'
      .then((entries) => {
        const mappedContent = entries.items.reduce((acc, item) => {
          // Destructure to get title directly
          const { title, ...rest } = item.fields;
          return { ...acc, [title]: rest }; // Spread existing and add new key:value
        }, {});
        setContent(mappedContent);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="sticky top-2 z-50 px-2">
        {/* Main Nav */}
        <nav
          id="main-nav"
          className="font-primary mx-auto flex h-16 max-w-screen-2xl justify-between rounded bg-bgDark px-6 py-2 text-white "
        >
          {/* nav left */}
          <div className="flex items-center">
            <img
              src={content.Logo?.image.fields.file.url}
              alt="Logo"
              className="h-10 w-10"
            />
            <h1 className="ml-6 text-xl font-bold leading-tight sm:text-3xl">
              {content.Me?.shortText}
            </h1>
          </div>

          <button
            id="nav-menu-btn"
            className="colors flex items-center rounded px-3 transition hover:scale-110 hover:bg-bgMedium md:hidden"
            onClick={toggleNavMenu}
          >
            <svg
              className="2-8 h-8"
              fill="#ffffff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 4h18v2H3V4Zm0 7h18v2H3v-2Zm0 7h18v2H3v-2Z"></path>
            </svg>
          </button>

          {/* nav middle */}
          <ul className="text-l hidden items-center gap-4 font-bold uppercase md:flex">
            <li>
              <a
                href="/link"
                className="colors border-0 border-b-2 border-transparent px-2 py-1 transition hover:border-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/link"
                className="colors border-0 border-b-2 border-transparent px-2 py-1 transition hover:border-white"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="/link"
                className="colors border-0 border-b-2 border-transparent px-2 py-1 transition hover:border-white"
              >
                Projects
              </a>
            </li>
          </ul>

          <div className="text-l hidden items-center font-bold uppercase lg:flex">
            <button
              className="w-38 group relative z-10 h-12 cursor-pointer overflow-hidden rounded-md border-none bg-bgMedium p-2 text-xl font-bold text-white"
              onClick={() =>
                (window.location.href = `mailto:${content.Email?.shortText}`)
              }
            >
              <p>Get In Touch</p>
              <span className="absolute -left-2 -top-8 h-32 w-40 origin-right rotate-12 scale-x-0 transform bg-blue-200 transition-transform duration-1000 group-hover:scale-x-100 group-hover:duration-500"></span>
              <span className="absolute -left-2 -top-8 h-32 w-40 origin-right rotate-12 scale-x-0 transform bg-blue-400 transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-700"></span>
              <span className="absolute -left-2 -top-8 h-32 w-40 origin-right rotate-12 scale-x-0 transform bg-primary transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-1000"></span>
              <span className="absolute left-6 top-2.5 z-10 opacity-0 duration-100 group-hover:opacity-100 group-hover:duration-1000">
                <p className="flex items-center gap-4">
                  Email
                  <svg
                    fill="currentColor"
                    className="-ml-1 inline h-6 w-6"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
            className="z-9 absolute -top-1 right-0 w-64 origin-top-right scale-y-0 rounded-b bg-bgDark transition-transform"
          >
            <ul className="font-primary pt-1 text-center font-bold uppercase text-white">
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
