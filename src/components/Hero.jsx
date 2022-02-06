import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { Link } from "react-router-dom";
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

  return (
    <div
      className={`hero-slide-item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide-item-content">
        <div className="hero-slide-item-content-info">
          <Link to={`/movie/${item.id}`} className="title">
            {item.title}
          </Link>
          <p className="overview">{item.overview}</p>
          {/* <div className="btns"></div> */}
        </div>
        <div className="hero-slide-item-content-poster">
          <img src={ImageServices.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};
