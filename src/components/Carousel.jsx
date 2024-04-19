import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function Carousel({ children: slide }) {
  // Carousel images
  const slides = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
    "/images/slide4.jpg",
  ];

  const [active, setActive] = useState(0);

  return (
    <div
      id="controls-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      {/* <!-- Slider controls --> */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-bold text-2xl">Today's Hot 100</h2>
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="flex right-12 mx-4 z-40 items-center justify-center w-10 h-10 bg-gray-600/50 rounded-full hover:bg-gray-700 focus:outline-none transition"
            data-carousel-prev
            onClick={() =>
              setActive(active === 0 ? slides.length - 1 : active - 1)
            }
          >
            <HiChevronLeft className="w-7 h-7 text-gray-200"/>
          </button>
          <button
            type="button"
            className="flex right-3 z-40 items-center justify-center w-10 h-10 bg-gray-600/50 rounded-full hover:bg-gray-700 focus:outline-none transition"
            data-carousel-next
            onClick={() =>
              setActive(active === slides.length - 1 ? 0 : active + 1)
            }
          >
            <HiChevronRight className="w-7 h-7 text-gray-200"/>
          </button>
        </div>
      </div>

      {/* <!-- Carousel wrapper --> */}
      <div className="flex relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Slides */}
        {slides.map((s, i) => (
          <div
          key={i}
            className={`${
              active === i ? "" : "hidden"
            } transition-all duration-70 ease-in-out`}
            data-carousel-item
          >
            <img
              src={s}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        ))}
      </div>

      {/* <!-- Slider controls --> */}
      {/* <button
        type="button"
        className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
        data-carousel-prev
        onClick={() => setActive(active === 0 ? slides.length - 1 : active - 1)}
      >
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <button
        type="button"
        className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
        data-carousel-next
        onClick={() => setActive(active === (slides.length - 1) ? 0 : active + 1)}
      >
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button> */}
      <button
        type="button"
        className="flex absolute top-3/4 left-7 z-40 items-center justify-center w-auto h-10 p-2 text-xl text-gray-900 shadow-2xl bg-white rounded-xl font-medium hover:bg-gray-100 focus:outline-none transition"
        data-carousel-prev
        onClick={() => setActive(active === 0 ? slides.length - 1 : active - 1)}
      >
        Download Album
      </button>
    </div>
  );
}

export default Carousel;
