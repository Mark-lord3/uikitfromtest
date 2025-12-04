import React, { useEffect, useRef } from "react";

export default function BonusDrawVideo({ videoUrl, posterUrl }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);
  return (
    <video
      ref={videoRef}
      loop
      autoPlay
      controls={false}
      muted
      playsInline=''
      data-wf-ignore='true'
      data-object-fit='cover'
      poster={posterUrl}
      className='bonus-draw__video '
    >
      <source src={videoUrl} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  );
}
