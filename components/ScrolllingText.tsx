import React from "react";

const ScrolllingText = () => {
  return (
    <div className="max-h-screen">
      <div
        style={{ writingMode: "vertical-lr" }}
        className="p-6  min-h-screen flex flex-row gap-2 overflow-hidden whitespace-nowrap bg-[#FF4F18] text-black"
      >
        <div className="animate-marquee flex flex-row gap-4 items-center text-4xl">
          <h1>Event : Oasis Bus tour , JLN Stadium , Delhi </h1>
          <Star />
          <h1>Collection Live : Meta Lives , live on astrix </h1>
          <Star />
        </div>
        <div className="animate-marquee2 flex flex-row gap-4 items-center text-4xl">
          <h1>Event : Oasis Bus tour , JLN Stadium , Delhi </h1>
          <Star />
          <h1>Collection Live : Meta Lives , live on astrix </h1>
          <Star />
        </div>
      </div>
    </div>
  );
};

export default ScrolllingText;

function Star() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.34293 12.8931L16.9889 17.2764L12.3056 2.73094L18.789 0.9783L22.2225 15.9151L32.4994 4.54494L37.3068 9.23481L26.1292 19.6541L41.0545 22.9636L39.3785 29.4061L24.7325 25.0229L29.4158 39.5683L22.9324 41.3209L19.499 26.3842L9.22206 37.7543L4.41461 33.0644L15.5923 22.6451L0.666964 19.3356L2.34293 12.8931Z"
        fill="#1A1D21"
      />
    </svg>
  );
}
