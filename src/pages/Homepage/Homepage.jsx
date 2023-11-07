import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  SliderPic,
  SliderTextOne,
  SliderTextTwo,
  SliderTextThree,
  SliderTextFour,
  SliderTextFive,
  Title,
  SubTitle,
} from "./Homepage.styled";
import imageOne from "../../assets/integra.jpg";
import imageTwo from "../../assets/ferrari.jpg";
import imageThree from "../../assets/bugatti.jpg";
import imageFour from "../../assets/row.jpg";
import imageFive from "../../assets/rollsroyce.webp";

const Homepage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    autoplay: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      <SliderPic>
        <img src={imageOne} alt="Integra" />
        <SliderTextOne>
          <Title>Exotic car rentals</Title>
          <SubTitle>A seamless experience</SubTitle>
        </SliderTextOne>
      </SliderPic>
      <SliderPic>
        <img src={imageTwo} alt="McLaren" />
        <SliderTextTwo>
          <Title>Treat yourself</Title>
          <SubTitle>Experience instant luxury car collection</SubTitle>
        </SliderTextTwo>
      </SliderPic>
      <SliderPic>
        <img src={imageThree} alt="McLaren" />
        <SliderTextThree>
          <Title>Rent our latest models</Title>
          <SubTitle>5 stars service</SubTitle>
        </SliderTextThree>
      </SliderPic>
      <SliderPic>
        <img src={imageFour} alt="Row" />
        <SliderTextFour>
          <Title>Low security deposits</Title>
          <SubTitle>Reserve your rental today</SubTitle>
        </SliderTextFour>
      </SliderPic>
      <SliderPic>
        <img src={imageFive} alt="RollsRoyce" />
        <SliderTextFive>
          <Title>Ready to get started?</Title>
          <SubTitle>A seamless experience</SubTitle>
        </SliderTextFive>
      </SliderPic>
    </Slider>
  );
};

export default Homepage;
