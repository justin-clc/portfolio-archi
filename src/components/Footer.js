export default function Footer({ content }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-bgDark">
      <footer className="mx-auto max-w-screen-2xl">
        {/* footer top */}
        <div className="flex items-center justify-center py-6">
          <hr className="ml-4 mr-2 flex h-px grow text-white md:ml-6 md:mr-4" />
          <span className="font-primary text-l capitalize leading-relaxed text-white">
            "{content.Tagline?.shortText}"
          </span>
          <hr className="ml-2 mr-4 flex h-px grow text-white md:ml-4 md:mr-6" />
        </div>

        {/* footer middle */}
        <div className="rounded bg-bgMedium md:flex md:items-center md:justify-around">
          <div className="max-w-2xl flex-col p-4 md:px-6 md:py-8">
            <h4 className="font-primary flex items-center text-2xl text-secondary">
              <svg
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 21h-8V6a3 3 0 0 1 3-3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1Zm-10 0H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a3 3 0 0 1 3 3v15Zm0 0h2v2h-2v-2Z" />
              </svg>
              &nbsp;{content.BibleVerse?.shortText}
            </h4>
            <p className="font-secodnary text-l leading-relaxed text-white">
              {content.BibleVerse?.longText}
            </p>
          </div>

          <div className="hidden h-auto min-h-28 w-px rounded bg-secondary md:block"></div>

          <div className="max-w-l w-fit p-4  md:px-6 md:py-8">
            <h4 className="font-primary flex items-center text-2xl text-secondary">
              <svg
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439h-.001Z" />
              </svg>
              &nbsp;Email:
            </h4>
            <a
              href={"mailto:" + content.Email?.shortText}
              className="font-secodnary text-l text-white hover:decoration-solid"
            >
              {content.Email?.shortText}
            </a>
          </div>
        </div>

        {/* footer bottom */}
        <div className="flex h-12 items-center justify-between bg-bgDark px-4 py-6">
          <span className="font-primary block px-3 text-sm text-secondary">
            &copy; Copyright 2024
          </span>

          <button
            type="button"
            className="font-primary flex items-center rounded pl-3 pr-2 text-sm font-bold text-secondary transition-colors hover:bg-secondary hover:text-bgDark"
            onClick={scrollToTop}
          >
            Back to top&nbsp;
            <svg
              className="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2Zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8Zm1-8v4h-2v-4H8l4-4 4 4h-3Z" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}
