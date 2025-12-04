import React from "react";
import VideoBlock from "../../../common/video-block/video-block";

export default function TourTabpanel({
  video,
  tabletVideo,
  mobileVideo,
  poster,
  tabletPoster,
  mobilePoster,
  children,
}) {
  return (
    <VideoBlock
      video={video}
      tabletVideo={tabletVideo}
      mobileVideo={mobileVideo}
      poster={poster}
      tabletPoster={tabletPoster}
      mobilePoster={mobilePoster}
    >
      {children}
    </VideoBlock>
  );
}
