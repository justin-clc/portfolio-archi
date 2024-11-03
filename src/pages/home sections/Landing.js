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

				{/* Divider */}
				<div className="relative hidden h-full min-h-96 w-1 items-center justify-between rounded-lg bg-white md:flex md:flex-col">
					<div className=" block h-1 min-w-4 rounded-lg bg-white"></div>
					<div className=" block h-1 min-w-4 rounded-lg bg-white"></div>
				</div>

				{/* Photo */}
				{!content.ShortDesc ? (
					<div className="min-h-52 min-w-52 animate-pulse rounded-2xl bg-bgLight md:min-h-80 md:min-w-80"></div>
				) : (
					<img
						src={content.ShortDesc?.image.fields.file.url}
						alt="Me"
						className="max-w-52 rounded-lg md:h-80 md:max-w-none"
					/>
				)}
			</div>
		</section>
	);
}
