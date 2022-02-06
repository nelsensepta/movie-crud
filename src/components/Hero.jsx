import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Hero.css";
import { ImageServices } from "../services/APIservice";
SwiperCore.use([Autoplay]);
const Hero = ({ movies }) => {
  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {movies &&
          movies.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <HeroSlideItem
                  item={item}
                  className={`${isActive ? "active" : ""}`}
                />
              )}
            </SwiperSlide>
          ))}
      </Swiper>
      {/* {getTranding.map((item, i) => (
        <TrailerModal key={i} item={item} />
      ))} */}
    </div>
  );
};
export default Hero;
const HeroSlideItem = (props) => {
  // let hisrory = useHistory();

  const item = props.item;
  const background = ImageServices.original(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  // const setModalActive = async () => {
  //   const modal = document.querySelector(`#modal_${item.id}`);
  //   const videos = await tmdbApi.getVideos(category.movie, item.id);
  //   if (videos.results.length > 0) {
  //     const videSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
  //     modal
  //       .querySelector(".modal__content > iframe")
  //       .setAttribute("src", videSrc);
  //   } else {
  //     modal.querySelector(".modal__content").innerHTML = "No trailer";
  //   }

  //   modal.classList.toggle("active");
  // };

  return (
    <div
      className={`hero-slide-item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide-item-content">
        <div className="hero-slide-item-content-info">
          <h4 className="title">{item.title}</h4>
          <p className="overview">{item.overview}</p>
          <div className="btns">
            {/* <Button>Watch now</Button>
            <OutlineButton>Watch trailer</OutlineButton> */}
          </div>
        </div>
        <div className="hero-slide-item-content-poster">
          <img src={ImageServices.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

// const TrailerModal = (props) => {
//   const item = props.item;

//   const iframeRef = useRef(null);

//   const onClose = () => iframeRef.current.setAttribute("src", "");

//   return (
//     <Modal active={false} id={`modal_${item.id}`}>
//       <ModalContent onClose={onClose}>
//         <iframe
//           ref={iframeRef}
//           width="100%"
//           height="500px"
//           title="trailer"
//         ></iframe>
//       </ModalContent>
//     </Modal>
//   );
// };
