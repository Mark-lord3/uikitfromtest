import React, { useRef } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import useMediaQuery from "../../../hooks/useMediaQuery";
import "./styles.scss";

const Controls = ({ zoomIn, zoomOut, resetTransform }) => {
  return (
    <div className='image-zoom-controls'>
      <button onClick={() => zoomIn()}>
        <svg
          width='24px'
          height='24px'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M20 20L14.9497 14.9498M14.9497 14.9498C16.2165 13.683 17 11.933 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.933 17 13.683 16.2165 14.9497 14.9498ZM7 10H13M10 7V13'
            stroke='#2e2e2e'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      <button onClick={() => zoomOut()}>
        <svg
          width='24px'
          height='24px'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M20 20L14.9497 14.9498M14.9497 14.9498C16.2165 13.683 17 11.933 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.933 17 13.683 16.2165 14.9497 14.9498ZM7 10H13'
            stroke='#2e2e2e'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      <button onClick={() => resetTransform()}>
        <svg
          width='21px'
          height='21px'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22'
            stroke='#2e2e2e'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <path
            d='M10 22C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14'
            stroke='#2e2e2e'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <path
            d='M10 2C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10'
            stroke='#2e2e2e'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <path
            d='M14 2C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10'
            stroke='#2e2e2e'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
        </svg>
      </button>
    </div>
  );
};

export default function ImageZoomWrapper(props) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const transformComponentRef = useRef(null);

  return (
    <div className='image-zoom-wrapper'>
      <TransformWrapper
        initialScale={1}
        minScale={0.7}
        ref={transformComponentRef}
        wheel={{
          disabled: true,
        }}
        pinch={{
          step: 5,
        }}
      >
        {(utils) => (
          <React.Fragment>
            <Controls {...utils} />
            <TransformComponent
              wrapperStyle={{
                height: isMobile ? "75vw" : "calc(100vh - 75px - 125px)",
                width: "100%",
              }}
              contentStyle={{ width: "100%", height: "100%" }}
            >
              {props.children}
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  );
}
