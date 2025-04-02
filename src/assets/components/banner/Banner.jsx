import React from "react";
import Slider from "react-slick";
import { MoveRight, ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Stylesheets/Banner.css";

import bannerImage from "../../banner/banner_image.png";

function Banner() {
  const product = [
    {
      id: 1,
      title: "Best Furniture Collection for Your Interior",
      subtitle: "Welcome to Chairs",
      image: bannerImage,
    },
    {
      id: 2,
      title: "Premium Quality Furniture for Your Home",
      subtitle: "Modern Designs",
      image: bannerImage,
    },
    {
      id: 3,
      title: "Stylish and Comfortable Seating",
      subtitle: "Upgrade Your Space",
      image: bannerImage,
    },
  ];

  // Custom arrow components
  const PrevArrow = ({ onClick }) => (
    <button className="custom-arrow prev-arrow" onClick={onClick}>
      <ChevronLeft size={30} />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button className="custom-arrow next-arrow" onClick={onClick}>
      <ChevronRight size={30} />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />, // Custom previous arrow
    nextArrow: <NextArrow />, // Custom next arrow
  };

  return (
    <div className="slider_containt">
      <div className="slider-wrapper">
        <Slider {...settings}>
          {product.map((item) => (
            <div key={item.id} className="banner_slide_item">
              <div className="banner_text">
                <p>{item.subtitle}</p>
                <h3>{item.title}</h3>
                <button className="but_shop">
                  Shop now <MoveRight />
                </button>
              </div>
              <div className="banner_image">
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Banner;
