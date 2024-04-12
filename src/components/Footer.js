export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

    return (
        <div className="bg-bgDark">
            <footer className="mx-auto max-w-screen-2xl">
                {/* footer top */}
                <div className="flex items-center justify-center py-6">
                    <hr className="h-px flex grow text-white md:ml-6 md:mr-4 ml-4 mr-2" />
                    <span className="text-white font-primary text-l capitalize leading-relaxed">
                        "More than ever Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                    </span>
                    <hr className="h-px flex grow text-white md:ml-4 md:mr-6 ml-2 mr-4" />
                </div>

                {/* footer middle */}
                <div className="bg-bgMedium rounded md:flex md:items-center md:justify-around">
                    <div className="p-4 flex-col max-w-2xl md:px-6 md:py-8">
                        <h4 className="flex items-center font-primary text-secondary text-2xl">
                            <svg
                                className="w-8 h-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 21h-8V6a3 3 0 0 1 3-3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1Zm-10 0H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a3 3 0 0 1 3 3v15Zm0 0h2v2h-2v-2Z" />
                            </svg>
                            &nbsp;Book xx:xx
                        </h4>
                        <p className="font-secodnary text-white text-l leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nihil in, molestiae atque
                            beatae sit nam quo deleniti commodi possimus iure praesentium et itaque error perferendis at
                            dolore asperiores! Minima.
                        </p>
                    </div>

                    <div className="md:block hidden w-px rounded min-h-28 h-auto bg-secondary"></div>

                    <div className="p-4 w-fit max-w-l  md:px-6 md:py-8">
                        <h4 className="flex items-center font-primary text-secondary text-2xl">
                            <svg
                                className="w-8 h-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439h-.001Z" />
                            </svg>
                            &nbsp;Email:
                        </h4>
                        <a href="mailto:" className="font-secodnary hover:decoration-solid text-white text-l">
                            Loremipsum@email.com
                        </a>
                    </div>
                </div>

                {/* footer bottom */}
                <div className="bg-bgDark flex items-center justify-between h-12 px-4 py-4">
                    <span className="block font-primary text-secondary text-sm px-3">&copy; Copyright 2024</span>

                    <button type="button" className="flex items-center pl-3 pr-2 rounded font-primary font-bold text-secondary text-sm hover:bg-secondary hover:text-bgDark transition-colors" onClick={scrollToTop}>
                        Back to top&nbsp;
                        <svg
                            className="h-8 w-8"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2Zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8Zm1-8v4h-2v-4H8l4-4 4 4h-3Z" />
                        </svg>
                    </button>
                </div>
            </footer>
        </div>
    );
}
