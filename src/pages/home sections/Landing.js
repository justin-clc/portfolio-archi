import { useNavigate } from "react-router-dom";
import SkeletonLoader from "../../components/SkeletonLoader";

export default function Landing({ content }) {
	const navigate = useNavigate();

	const goToSchoolYears = () => {
		navigate("/school-year/1");
	};

	const landingHeight = {
		height: "clamp(600px, 100dvh, 720px)",
	};

	return (
		<section
			className="-mt-16 bg-bgDark px-8 py-24 md:pt-36"
			style={landingHeight}
		>
			<div className="mx-auto flex h-full max-h-[480px] max-w-7xl flex-col-reverse items-center gap-8 md:max-h-[400px] md:flex-row">
				{/* Landing Content */}
				<div className="flex flex-col items-center justify-center md:ml-8 md:w-1/2 md:items-end">
					{/* Work in progress */}
					{/* <span className="text-center font-secondary text-lg text-accent md:text-right">
						Architecture Student
					</span> */}

					{!content.Me ? (
						<SkeletonLoader type={"headingLg"} />
					) : (
						<h1 className="text-center font-primary text-4xl font-bold text-white md:text-right md:text-5xl">
							{content.Me?.shortText}
						</h1>
					)}
					{!content.ShortDesc ? (
						<>
							<SkeletonLoader
								type={"paragraph"}
								color={"medium"}
							/>
						</>
					) : (
						<p className="text-l max-w-3/4 mt-2 text-center font-secondary font-bold text-bgLight md:text-right md:text-lg">
							{content.ShortDesc?.shortText}
						</p>
					)}

					<button
						type="button"
						id="view-projects"
						className="mt-4 flex h-fit w-44 cursor-pointer items-center justify-start gap-3 rounded-sm border-4 border-primary bg-primary"
						onClick={goToSchoolYears}
					>
						<span className="text flex h-full w-4/5 items-center justify-center bg-bgDark py-1 font-bold text-white">
							View Projects
						</span>
						<svg
							className="arrow fill-white"
							viewBox="0 0 448 512"
							height="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
						</svg>
					</button>
				</div>

        <svg
          id="landing-svg"
          className="relative md:-mr-6"
          style={landingSvgStyle}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="landing-blob"
            className="animate-pulse text-bgMedium"
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
