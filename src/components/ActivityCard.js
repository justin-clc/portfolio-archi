export default function ActivityCard({ link, title, image, shortDesc }) {
  return (
    <div className="max-h-xl w-72 rounded-lg bg-bgDark shadow xs:w-80">
      <a href={link}>
        <img
          className="h-64 w-full rounded-t-lg object-cover"
          src={image}
          alt={title + "-preview"}
        />
      </a>
      <div className="p-5">
        <a href={link}>
          <h5 className="font-primary mb-2 overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-bold tracking-tight text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 block h-12 font-normal text-gray-700 dark:text-gray-400">
          {shortDesc}
        </p>
        <a
          href={link}
          className="hover inline-flex items-center rounded-lg border-2 border-transparent bg-accent px-3 py-2 text-center text-sm font-medium text-bgDark transition-colors hover:border-accent hover:bg-bgDark hover:text-white"
        >
          Read more
          <svg
            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
