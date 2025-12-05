import React, { useState, useEffect } from "react";
import TitleText from "../common/title-text/title-text";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import SwiperCore from "swiper";
import "./styles.scss";

SwiperCore.use([Navigation, Pagination]);

// export default function GallerySlider({ data }) {
//   // const slides = data.map(({ title, text, imageName }, i) => (
//   //   <div className='gallery-images' role='presentation' key={i}>
//   //     <div className='gallery-image'>
//   //       <img
//   //         srcSet={`
//   //           ${withUrl(`${imageName}_800x600`)} 800w,
//   //           ${withUrl(`${imageName}_1600x900`)} 1600w,
//   //           ${withUrl(`${imageName}_3840x2160`)} 3840w,
//   //         `}
//   //         sizes={`(max-width: 800px) 800px, (max-width: 1600px) 1600px, 3840px`}
//   //         src={`${withUrl(`${imageName}_1600x900`)}`}
//   //         alt='property'
//   //       />
//   //     </div>
//   //     <div className='simple-gallery__info'>
//   //       <h3>{title}</h3>
//   //       <p>{text}</p>
//   //     </div>
//   //   </div>
//   // ));
//   const [slideInfo, setSlideInfo] = useState({
//     title: "",
//     text: "",
//   });

//   useEffect(() => {
//     const slide = data[0];
//     if (slide && slide.title !== slideInfo.title) {
//       setSlideInfo({ title: slide.title, text: slide.description });
//     }
//   }, []);

//   const createImageCarousel = () => {
//     const images = [];
//     let image;
//     if (data && data.length) {
//       for (let i = 0; i < data.length; i++) {
//         const item = data[i];
//         image = (
//           <div className='gallery-images' role='presentation' key={item._id}>
//             <div className='gallery-image'>
//               <img
//                 srcSet={`
//             ${item.image800Url} 800w,
//             ${item.image1600Url} 1600w,
//             ${item.image3840Url} 3840w,
//           `}
//                 sizes={`(max-width: 800px) 800px, (max-width: 1600px) 1600px, 3840px`}
//                 src={item.image1600Url}
//                 alt='property'
//               />
//             </div>
//           </div>
//         );
//         images.push(image);
//       }
//     }
//     return images;
//   };

//   const info = (
//     <div className='gallery-slider__info' id='gallery-info'>
//       <h3>{slideInfo.title}</h3>
//       <p>{slideInfo.text}</p>
//     </div>
//   );

//   const images = createImageCarousel();
//   return (
//     <div className='gallery-slider'>
//       <TitleText isCentered as='h2' variant={"primary"} color='color-1'>
//         Gallery
//       </TitleText>
//       {/* <MainSlider theme='light'>{slides}</MainSlider> */}
//       <div className='main-slider'>
//         <Swiper
//           slidesPerView={1}
//           speed={700}
//           autoPlay={{
//             delay: 2000,
//           }}
//           loop
//           navigation
//           pagination={{ clickable: true }}
//           className='swiper-theme-light'
//           onSlideChange={(swiper) => {
//             const index = swiper.realIndex;
//             const slide = data[index];
//             if (slide && slide.title !== slideInfo.title) {
//               setSlideInfo({ title: slide.title, text: slide.description });
//               document.getElementById("gallery-info").classList.add("update-title");
//               setTimeout(() => {
//                 document.getElementById("gallery-info").classList.remove("update-title");
//               }, 500);
//             }
//           }}
//         >
//           {images.map((item, index) => (
//             <SwiperSlide key={index}>{item}</SwiperSlide>
//           ))}
//         </Swiper>
//         {info}
//       </div>
//     </div>
//   );
// }

export default function GallerySlider({ data }) {
  const [slideInfo, setSlideInfo] = useState({
    title: "",
    text: "",
  });

  // === FULLY CUSTOM DOT STATE ===
  const [activeDot, setActiveDot] = useState(0);
  const dots = [0, 1, 2];

  // Track previous real slide index to detect direction
  const [lastRealIndex, setLastRealIndex] = useState(0);

  useEffect(() => {
    if (data?.length) {
      setSlideInfo({
        title: data[0].title,
        text: data[0].description,
      });
    }
  }, [data]);

  // -------- DOT CLICK HANDLER --------
  function goToDot(dotIndex, swiper) {
    const total = data.length;

    // Calculate direction by comparing desired and current dot
    let direction = null;

    if (dotIndex === (activeDot + 1) % 3) {
      direction = "forward";
    } else if (dotIndex === (activeDot - 1 + 3) % 3) {
      direction = "backward";
    }

    // Update dots according to direction
    if (direction === "forward") {
      setActiveDot((prev) => (prev + 1) % 3);
    } else if (direction === "backward") {
      setActiveDot((prev) => (prev - 1 + 3) % 3);
    }

    // Move Swiper
    const diff = dotIndex - activeDot;
    const realSlide = (((lastRealIndex + diff) % total) + total) % total;

    swiper.slideToLoop(realSlide);
  }

  // -------- IMAGE CARDS --------
  const images = data.map((item) => (
    <div className='gallery-images' role='presentation' key={item._id}>
      <div className='gallery-image'>
        <img
          srcSet={`
            ${item.image800Url} 800w,
            ${item.image1600Url} 1600w,
            ${item.image3840Url} 3840w
          `}
          sizes='(max-width: 800px) 800px, (max-width: 1600px) 1600px, 3840px'
          src={item.image1600Url}
          alt={item.title}
        />
      </div>
    </div>
  ));

  return (
    <div className='gallery-slider'>
      <TitleText isCentered as='h2' variant='primary' color='color-1'>
        Gallery
      </TitleText>

      <div className='main-slider'>
        <Swiper
          slidesPerView={1}
          speed={700}
          autoplay={{ delay: 5000 }}
          loop
          navigation
          pagination={false}
          className='swiper-theme-light'
          onSlideChange={(swiper) => {
            const real = swiper.realIndex;
            const total = data.length;
            const last = total - 1;

            let direction = null;

            // FORWARD (including loop last→first)
            if (real === (lastRealIndex + 1) % total) {
              direction = "forward";
            }
            // BACKWARD (including loop first→last)
            else if (real === (lastRealIndex - 1 + total) % total) {
              direction = "backward";
            }

            // Update dot based on detected direction
            if (direction === "forward") {
              setActiveDot((prev) => (prev + 1) % 3);
            } else if (direction === "backward") {
              setActiveDot((prev) => (prev - 1 + 3) % 3);
            }

            // Save new index
            setLastRealIndex(real);

            // Update slide info
            const slide = data[real];
            if (slide) {
              setSlideInfo({
                title: slide.title,
                text: slide.description,
              });

              const info = document.getElementById("gallery-info");
              info?.classList.add("update-title");
              setTimeout(() => info?.classList.remove("update-title"), 500);
            }
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>{img}</SwiperSlide>
          ))}
        </Swiper>

        {/* INFO BLOCK */}
        <div className='gallery-slider__info' id='gallery-info'>
          <h3>{slideInfo.title}</h3>
          <p>{slideInfo.text}</p>

          {/* === CUSTOM DOTS === */}
          <div className='gallery-slider__dots'>
            {dots.map((dotIndex) => (
              <button
                key={dotIndex}
                className={"gallery-slider__dot" + (dotIndex === activeDot ? " active" : "")}
                onClick={() => {
                  const swiper = document.querySelector(".swiper-theme-light").swiper;
                  goToDot(dotIndex, swiper);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
