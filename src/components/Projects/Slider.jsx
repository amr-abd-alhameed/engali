import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

import f6 from "../../assets/three.jpg";
import f1 from "../../assets/one1.jpg";
import f2 from "../../assets/i.jpg";
import f3 from "../../assets/i5.avif";
import f4 from "../../assets/i6.avif";
import f5 from "../../assets/i89.avif";

let data = [
  {
    img: f1,
    disc: "تالتة ثانوي",
  },
  {
    img: f2,
    disc: "تانية ثانوي ",
  },
  {
    img: f5,
    disc: "أولى ثانوي",
  },
  {
    img: f4,
    disc: "أولى أعدادي",
  },
  {
    img: f3,
    disc: "تانية أعدادي",
  },
  {
    img: f6,
    disc: "تالتة أعدادي",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings} direction="right">
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: #01be96;
    cursor: pointer;
    /* color: rgba(255, 255, 255, 0.1); */
    border: none;
    position: absolute;
    top: 45%;
  }
  svg {
    color: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    font-size: 30px;
  }

  .back {
    right: 103%;
  }
  .next {
    right: -7%;
  }
  @media (max-width: 840px) {
    .back {
      right: 99%;
    }
    .next {
      right: -4%;
    }
  }
`;
