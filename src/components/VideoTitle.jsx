import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-6 md:px-16 absolute bg-gradient-to-r from-black">
      <h1 className="md:text-6xl text-2xl text-white/80 md:text-white font-bold ">
        {title}
      </h1>
      <p className="hidden md:inline-block py-6 text-lg w-[30vmax] text-white">
        {overview}
      </p>
      <div>
        <button className="md:px-6 md:py-2 px-2 py-1 mt-2  bg-white/70 md:bg-white hover:bg-opacity-80  mr-4 rounded-lg text-black text-lg">
          <i className="ri-play-fill text-xl"></i>
          Play
        </button>
        <button className="hidden md:inline-block px-4 py-2  bg-gray-700  rounded-lg text-white text-lg">
          <i className="ri-information-line"></i> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
