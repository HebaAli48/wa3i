import React, { useRef, useState } from "react";
 // replace with the correct path

const CustomizedVideo = ({color,width , video , shadow}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={`relative ${width} ${shadow}`}>
      <video
        ref={videoRef}
        className={`w-full rounded-3xl`}
        src={video}
        onPlay={handleVideoPlay}
        controls={isPlaying} // Show default controls when video is playing
      />
      {!isPlaying && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
          onClick={handlePlayPause}
        >
          {/* Your custom play button, e.g., a triangle ▶ */}
          <span className="inline-block z-20 border-l-8 border-r-8 border-transparent border-b-16 border-white">
            <svg
              width="68"
              height="68"
              viewBox="0 0 68 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.7">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M33.9995 0.28833C52.4344 0.28833 67.3789 15.2328 67.3789 33.6677C67.3789 52.1027 52.4344 67.0471 33.9995 67.0471C15.5646 67.0471 0.620117 52.1026 0.620117 33.6677C0.620117 15.2328 15.5646 0.28833 33.9995 0.28833Z"
                  fill={color}
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M45.5455 32.0765C46.145 32.4387 46.5113 33.088 46.5113 33.7883C46.5113 34.4887 46.145 35.138 45.5455 35.5002L27.4131 46.4551C26.7955 46.8283 26.0247 46.8398 25.3962 46.4852C24.7677 46.1306 24.3789 45.465 24.3789 44.7433V22.8333C24.3789 22.1117 24.7677 21.446 25.3962 21.0914C26.0247 20.7368 26.7955 20.7483 27.4131 21.1215L45.5455 32.0765Z"
                  fill="white"
                />
              </g>
            </svg>
          </span>
        </div>
      )}
    </div>
  );
};

export default CustomizedVideo;
