export default function Home() {
    return (
        <main className="w-full -mt-16">
            <div className="bg-secondary relative">
                <img
                    src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="absolute z-1 w-full h-full object-cover bg-secondary opacity-25 z-1"
                />
                <div
                    id="landing-section"
                    className="flex flex-col-reverse md:flex-row md:justify-around l:gap-6 md:gap-5 relative items-center box-border mx-auto pt-20 pb-10 md:pb-0 md:pt-12 px-10 max-w-screen-2xl z-5">
                    <div className="md:ml-8 flex flex-col md:items-start items-center">
                        <h1 className="font-primary font-bold 2xl:text-7xl l:text-6xl md:text-5xl text-4xl text-bgDark text-center md:text-left">
                            Justin Carl Castro
                        </h1>
                        <p className="font-secondary font-bold md:text-2xl text-xl text-bgMedium md:text-left text-center mt-2">
                            Sigma skibidi rizzler top-g and best rizzard from mogwarts school of the gyatts
                        </p>
                        <button className="overflow-hidden relative w-48 p-2 h-12 bg-primary mt-6 text-white border-none rounded-md text-xl font-primary capitalize font-bold cursor-pointer relative z-5 group hover:scale-105  transition-transform">
                            View my projects
                            <span className="absolute w-52 h-32 -top-8 -left-2 bg-blue-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
                            <span className="absolute w-52 h-32 -top-8 -left-2 bg-blue-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
                            <span className="absolute w-52 h-32 -top-8 -left-2 bg-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
                            <span className="flex items-center group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                                <p className="flex items-center justify-center gap-3 w-36 -mt-px">
                                    Let's Go
                                    <svg
                                        fill="currentColor"
                                        className="w-8 h-8 inline"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 11V8l4 4-4 4v-3H8v-2h4Zm0-9c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2Zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8Z" />
                                    </svg>
                                </p>
                            </span>
                        </button>
                    </div>

                    <svg id="landing-svg" className="relative md:-mr-6" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path
                            id="landing-blob"
                            className="text-primary"
                            fill="currentColor"
                            d="M23.3,-28.7C30.4,-21.7,36.8,-14.6,38.5,-6.5C40.2,1.6,37.4,10.8,32.4,18C27.4,25.3,20.2,30.6,11.8,34.5C3.5,38.4,-6.2,40.8,-13.9,38.1C-21.6,35.3,-27.5,27.3,-32,18.8C-36.6,10.3,-39.9,1.3,-38.7,-7C-37.5,-15.4,-31.7,-23.2,-24.5,-30.2C-17.3,-37.2,-8.7,-43.4,-0.3,-43C8,-42.6,16.1,-35.7,23.3,-28.7Z"
                            transform="translate(50 50)"
                            strokeWidth={0}></path>
                        <clipPath id="cp">
                            <use href="#landing-blob" />
                        </clipPath>
                        <image
                            className="relative object-cover w-full h-auto"
                            clipPath="url(#cp)"
                            href="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/369263335_3450684521863236_4910626073360399844_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fdefx10K1kIAb6xpYAI&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfABKLtg6-A_TDV15jVHw3GxA6QUmeeEUq5iFcRXrsavkA&oe=66257A84"
                        />
                    </svg>
                </div>
            </div>
        </main>
    );
}
