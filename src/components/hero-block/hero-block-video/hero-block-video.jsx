import React, { useEffect, useRef, useState } from "react";

export default function HeroBlockVideo(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [videoStarted, setVideoStarted] = useState(false);
  const vidRef = useRef(null);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  const isMobile = width <= 576;
  const isTablet = width > 576 && width < 1024;
  const isDesktop = width > 1024;
  const hasMobileVideo = props.mobileVideo ? true : false;
  const hasTabletVideo = props.tabletVideo ? true : false;
  const hasMobilePoster = props.mobilePoster ? true : false;
  const hasTabletPoster = props.tabletPoster ? true : false;

  const video = isDesktop
    ? props.video
    : isTablet && hasTabletVideo
      ? props.tabletVideo
      : isMobile && hasMobileVideo
        ? props.mobileVideo
        : props.video
          ? props.video
          : null;

  const poster = isDesktop
    ? props.poster
    : isTablet && hasTabletPoster
      ? props.tabletPoster
      : isMobile && hasMobilePoster
        ? props.mobilePoster
        : props.poster
          ? props.poster
          : null;

  const togglePlayVideo = () => {
    videoPlaying && videoStarted ? vidRef.current.pause() : vidRef.current.play();
    setVideoPlaying((prev) => !prev);
  };
  const handleVideoPlay = () => {
    if (!videoStarted) {
      setVideoStarted(true);
    }
  };

  useEffect(() => {
    if (vidRef && video) {
      vidRef.current.play();
    }
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  return (
    <div className='video-block-container'>
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
      <div className='video-buttons-group'>
        <button onClick={togglePlayVideo}>
          {videoPlaying && videoStarted ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
      <div className='video-block-overlay'></div>
      {props.children}
    </div>
  );
}

function PlayIcon() {
  return (
    <svg
      width='24px'
      height='24px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z'
        stroke='#000000'
        strokeWidth='2'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      width='24px'
      height='24px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.948 1.25H6.052C6.95048 1.24997 7.6997 1.24995 8.29448 1.32991C8.92228 1.41432 9.48908 1.59999 9.94455 2.05546C10.4 2.51093 10.5857 3.07773 10.6701 3.70552C10.7501 4.30031 10.75 5.04953 10.75 5.94801V18.052C10.75 18.9505 10.7501 19.6997 10.6701 20.2945C10.5857 20.9223 10.4 21.4891 9.94455 21.9445C9.48908 22.4 8.92228 22.5857 8.29448 22.6701C7.6997 22.7501 6.95048 22.75 6.052 22.75H5.94801C5.04953 22.75 4.30031 22.7501 3.70552 22.6701C3.07773 22.5857 2.51093 22.4 2.05546 21.9445C1.59999 21.4891 1.41432 20.9223 1.32991 20.2945C1.24995 19.6997 1.24997 18.9505 1.25 18.052V5.948C1.24997 5.04952 1.24995 4.3003 1.32991 3.70552C1.41432 3.07773 1.59999 2.51093 2.05546 2.05546C2.51093 1.59999 3.07773 1.41432 3.70552 1.32991C4.3003 1.24995 5.04952 1.24997 5.948 1.25ZM3.90539 2.81654C3.44393 2.87858 3.24644 2.9858 3.11612 3.11612C2.9858 3.24644 2.87858 3.44393 2.81654 3.90539C2.7516 4.38843 2.75 5.03599 2.75 6V18C2.75 18.964 2.7516 19.6116 2.81654 20.0946C2.87858 20.5561 2.9858 20.7536 3.11612 20.8839C3.24644 21.0142 3.44393 21.1214 3.90539 21.1835C4.38843 21.2484 5.03599 21.25 6 21.25C6.96401 21.25 7.61157 21.2484 8.09461 21.1835C8.55607 21.1214 8.75357 21.0142 8.88389 20.8839C9.0142 20.7536 9.12143 20.5561 9.18347 20.0946C9.24841 19.6116 9.25 18.964 9.25 18V6C9.25 5.03599 9.24841 4.38843 9.18347 3.90539C9.12143 3.44393 9.0142 3.24644 8.88389 3.11612C8.75357 2.9858 8.55607 2.87858 8.09461 2.81654C7.61157 2.7516 6.96401 2.75 6 2.75C5.03599 2.75 4.38843 2.7516 3.90539 2.81654ZM17.948 1.25H18.052C18.9505 1.24997 19.6997 1.24995 20.2945 1.32991C20.9223 1.41432 21.4891 1.59999 21.9445 2.05546C22.4 2.51093 22.5857 3.07773 22.6701 3.70552C22.7501 4.30031 22.75 5.04953 22.75 5.94801V18.052C22.75 18.9505 22.7501 19.6997 22.6701 20.2945C22.5857 20.9223 22.4 21.4891 21.9445 21.9445C21.4891 22.4 20.9223 22.5857 20.2945 22.6701C19.6997 22.7501 18.9505 22.75 18.052 22.75H17.948C17.0495 22.75 16.3003 22.7501 15.7055 22.6701C15.0777 22.5857 14.5109 22.4 14.0555 21.9445C13.6 21.4891 13.4143 20.9223 13.3299 20.2945C13.2499 19.6997 13.25 18.9505 13.25 18.052V5.94801C13.25 5.04953 13.2499 4.30031 13.3299 3.70552C13.4143 3.07773 13.6 2.51093 14.0555 2.05546C14.5109 1.59999 15.0777 1.41432 15.7055 1.32991C16.3003 1.24995 17.0495 1.24997 17.948 1.25ZM15.9054 2.81654C15.4439 2.87858 15.2464 2.9858 15.1161 3.11612C14.9858 3.24644 14.8786 3.44393 14.8165 3.90539C14.7516 4.38843 14.75 5.03599 14.75 6V18C14.75 18.964 14.7516 19.6116 14.8165 20.0946C14.8786 20.5561 14.9858 20.7536 15.1161 20.8839C15.2464 21.0142 15.4439 21.1214 15.9054 21.1835C16.3884 21.2484 17.036 21.25 18 21.25C18.964 21.25 19.6116 21.2484 20.0946 21.1835C20.5561 21.1214 20.7536 21.0142 20.8839 20.8839C21.0142 20.7536 21.1214 20.5561 21.1835 20.0946C21.2484 19.6116 21.25 18.964 21.25 18V6C21.25 5.03599 21.2484 4.38843 21.1835 3.90539C21.1214 3.44393 21.0142 3.24644 20.8839 3.11612C20.7536 2.9858 20.5561 2.87858 20.0946 2.81654C19.6116 2.7516 18.964 2.75 18 2.75C17.036 2.75 16.3884 2.7516 15.9054 2.81654Z'
        fill='#1C274C'
      />
    </svg>
  );
}
