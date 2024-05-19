import React from "react";
import { useNavigate } from "react-router-dom"; // Import for using useNavigate hook

export default function BackBtn({ link, theme }) {
  const navigate = useNavigate(); // Utilize the useNavigate hook

  const handleClick = () => {
    // Handle potential invalid link scenarios gracefully
    if (!link || typeof link !== "string") {
      console.error("Invalid link provided to BackBtn component.");
      // Optionally: Display an error message to the user
      return;
    }
    navigate(link); // Perform the redirect using useNavigate
  };

  if (theme === "alt") {
    return (
      <div className="relative m-auto block max-w-5xl px-4">
        <button
          className="absolute top-24 z-20 cursor-pointer duration-200 hover:scale-125 active:scale-100"
          title="Go Back"
          onClick={handleClick} // Bind handleClick function to button click
        >
          <svg
            className="fill-bgDark stroke-bgDark"
            width={32}
            height={32}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.828 10.997H20v2H7.828l5.364 5.364-1.414 1.414L4 11.997l7.778-7.778 1.414 1.414-5.364 5.364Z" />
          </svg>
        </button>
      </div>
    );
  } else {
    return (
      <div className="relative m-auto block max-w-5xl px-4">
        <button
          className="absolute top-24 z-10 cursor-pointer duration-200 hover:scale-125 active:scale-100"
          title="Go Back"
          onClick={handleClick} // Bind handleClick function to button click
        >
          <svg
            className="fill-accent stroke-accent"
            width={32}
            height={32}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.828 10.997H20v2H7.828l5.364 5.364-1.414 1.414L4 11.997l7.778-7.778 1.414 1.414-5.364 5.364Z" />
          </svg>
        </button>
      </div>
    );
  }
}
