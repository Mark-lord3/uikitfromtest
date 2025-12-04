import React, { useEffect, useRef, useState } from "react";

export default function DreamDrawVideo({ video, poster }) {
  const vidRef = useRef(null);
  const [videoStarted, setVideoStarted] = useState(false);
  const handleVideoPlay = () => {
    if (!videoStarted) {
      setVideoStarted(true);
    }
  };
  useEffect(() => {
    if (vidRef && video) {
      vidRef.current.play();
    }
  }, []);
  return (
    <div className='dream-draw__media'>
      <div className='dream-draw-video'>
        <video
          ref={vidRef}
          id='competition-video'
          loop
          autoPlay
          muted
          playsInline=''
          data-wf-ignore='true'
          data-object-fit='cover'
          poster={poster}
          onPlay={handleVideoPlay}
        >
          <source src={video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <p className='dream-draw-video__text'>
          <span>Win this BMW 520i</span>
          <span>...or £55,000 cash tax-free</span>
        </p>
      </div>
    </div>
  );
}
