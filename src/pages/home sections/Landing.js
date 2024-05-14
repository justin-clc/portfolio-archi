export default function Landing({ content }) {
  const landingHeight = {
    height: "clamp(600px, 100dvh, 1024px)",
  };

  const landingSvgWidth = {
    width: "clamp(275px, 95dvw, 900px)",
  };

  return (
    <section className="relative bg-secondary">
      <img
        src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="z-1 z-1 absolute h-full w-full bg-secondary object-cover opacity-25"
      />
      <div
        className="l:gap-6 z-5 relative mx-auto box-border flex max-w-screen-2xl flex-col-reverse items-center px-10 pb-10 pt-20 md:flex-row md:justify-around md:gap-5 md:pb-0 md:pt-12"
        style={landingHeight}
      >
        <div className="flex flex-col items-center md:ml-8 md:items-start">
          <h1 className="font-primary l:text-6xl text-center text-4xl font-bold text-bgDark md:text-left md:text-5xl 2xl:text-7xl">
            {content.Me?.shortText}
            {/* Use optional chaining to avoid the error */}
          </h1>
          <p className="font-secondary mt-2 text-center text-xl font-bold text-bgMedium md:text-left md:text-2xl">
            {content.ShortDesc?.shortText}
          </p>
          <button className="font-primary group relative z-10 mt-6 h-12 w-48 cursor-pointer overflow-hidden rounded-md border-none bg-primary p-2 text-xl font-bold capitalize text-white transition-transform  hover:scale-105">
            View my projects
            <span className="absolute -left-2 -top-8 h-32 w-52 origin-bottom scale-x-0 transform rounded-full bg-blue-200 transition-transform duration-1000 group-hover:scale-x-100 group-hover:duration-500"></span>
            <span className="absolute -left-2 -top-8 h-32 w-52 origin-bottom scale-x-0 transform rounded-full bg-blue-400 transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-700"></span>
            <span className="absolute -left-2 -top-8 h-32 w-52 origin-bottom scale-x-0 transform rounded-full bg-primary transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-1000"></span>
            <span className="absolute left-6 top-2.5 z-10 flex items-center opacity-0 duration-100 group-hover:opacity-100 group-hover:duration-1000">
              <p className="-mt-px flex w-36 items-center justify-center gap-3">
                Let's Go
                <svg
                  fill="currentColor"
                  className="inline h-8 w-8"
                  // style={landingSvgWidth}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 11V8l4 4-4 4v-3H8v-2h4Zm0-9c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2Zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8Z" />
                </svg>
              </p>
            </span>
          </button>
        </div>

        <svg
          id="landing-svg"
          className="relative md:-mr-6"
          style={landingSvgWidth}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="landing-blob"
            className="text-transparent"
            fill="currentColor"
            d="M23.3,-28.7C30.4,-21.7,36.8,-14.6,38.5,-6.5C40.2,1.6,37.4,10.8,32.4,18C27.4,25.3,20.2,30.6,11.8,34.5C3.5,38.4,-6.2,40.8,-13.9,38.1C-21.6,35.3,-27.5,27.3,-32,18.8C-36.6,10.3,-39.9,1.3,-38.7,-7C-37.5,-15.4,-31.7,-23.2,-24.5,-30.2C-17.3,-37.2,-8.7,-43.4,-0.3,-43C8,-42.6,16.1,-35.7,23.3,-28.7Z"
            transform="translate(50 50)"
            strokeWidth={0}
          ></path>
          <clipPath id="cp">
            <use href="#landing-blob" />
          </clipPath>
          <image
            className="relative h-auto w-full object-cover"
            clipPath="url(#cp)"
            href={content.ShortDesc?.image.fields.file.url}
          />
        </svg>
      </div>
    </section>
  );
}
