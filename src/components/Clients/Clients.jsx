import React, { useRef } from "react";import Slider from "react-slick/lib/slider";
import styled from "styled-components";
import ClientSlider from "./ClientSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slide from "react-awesome-reveal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from "../../assets/a1.jpg";
import photo2 from "../../assets/a2.jpg";
import photo3 from "../../assets/a3.jpg";
import photo4 from "../../assets/i6.avif";

let clients = [
  {
    name: "عمرو عبد الحميد ",
    position: "طالب ثانوي",
    img_url: photo1,
    stars: 3,
    disc: `بفضل توجيهه الفردي وشرحه المبسط، استطعت تحسين فهمي للمواد وتطوير مهاراتي الرياضية بشكل كبير  .`,
  },
  {
    name: "باسين أحمدي",
    position: "طالب بالمرحلة الأعدادية",
    img_url: photo2,
    stars: 4,
    disc: ` المهندس يجعل كل درس مثيرًا وممتعًا، ويشجعني دائمًا على بذل قصارى جهدي وتحقيق أفضل نتائج. أنا ممتن له على تفانيه واهتمامه `,
  },
  {
    name: "سلمي سعد ",
    position: "طالبة طب بشري",
    img_url: photo3,
    stars: 5,
    disc: `أنا ممتنة لجهوده الكبيرة وأشعر بالثقة والاستعداد لمواجهة التحديات الأكاديمية بثقة وإيجابية. شكراً لك، مهندسنا العظيم`,
  },
  {
    name: "مهاب عمر",
    position: "طالب بالمرحلة الأبتدائية",
    img_url: photo4,
    stars: 5,
    disc: `وأريد أن أشكر المهندس المدرس على مساعدتي في تعلم الرياضيات. كانت دروسه ممتعة وشيقة، وساعدني على فهم المواد بشكل أفضل وأصبحت الرياضيات أكثر سهولة بالنسبة لي`,
  },
];
var settings = {
  dots: true,
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
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  const arrowRef = useRef(null);
  let clientDisc = "";
  clientDisc = clients.map((item, i) => <ClientSlider item={item} key={i} />);
  return (
    <Container id="client">
      <Slide direction="left">
        <h1>ماذا يقول طلابي عنّي</h1>
      </Slide>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons>
      </Testimonials>
    </Container>
  );
};

export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: left;
    margin-left: 1rem;
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: #01be96;
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`;
const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: #01be96;
    cursor: pointer;
    font-size: 1.1rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;
