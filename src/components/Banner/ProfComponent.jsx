import React from "react";
import styled from "styled-components";

import { FaFacebook, FaTelegram, FaWhatsapp } from "react-icons/fa";
import Slide from "react-awesome-reveal";
import photo from "../../assets/ali1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="right">
        <Texts>
          <h4>
            مرحباً <span className="green">بأولياء الأمور</span>
          </h4>
          <h1 className="green">المهندس علي ممدوح</h1>
          <h3>مهندس اتصلات جامعة الفيوم بتقدير عام امتياز مع مرتبة الشرف</h3>
          <p>
            يسعى المهندس علي لتجربة تعلم رياضيات ممتعة وفريدة, باساليب تعليمة
            مبتكرة خصيصا لأبنك لضمان التفوق والتميز
          </p>
          <button>تواصل معي</button>
          <Social>
            <span>01153298262</span>
            <div className="social-icons">
              <span>
                <a href="/">
                  <FaTelegram />
                </a>
              </span>
              <span>
                <a href="01153298262">
                  <FaWhatsapp />
                </a>
              </span>
              <span>
                <a href="https://www.facebook.com/profile.php?id=100006463480002">
                  <FaFacebook />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="left">
        <Profile>
          <img src={photo} alt="profile" />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  width: 80%;
  /* max-width: 1280px; */
  margin: 0 auto;
  z-index: 1;
  /* height: 80%; */
  justify-content: center;
  align-items: center;
  @media (max-width: 992px) {
    width: 90%;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  font-size: 22px;
  h4 {
    letter-spacing: 2px;
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
    letter-spacing: 2px;
    line-height: 38px;
    width: 80%;
    @media (max-width: 992px) {
      width: 100%;

      /* text-align: center; */
    }
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    border-radius: 6px;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
    @media (max-width: 992px) {
      margin-top: 1rem;
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 992px) {
    justify-content: center;
    margin-top: 1.5rem;
  }
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      /* background-color: #01be96; */
      background-color: white;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      /* color: black; */
      color: #01be96;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    border-radius: 25px;
    width: 100%;
    height: auto;
    /* width: 25rem; */
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    /* @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    } */
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
