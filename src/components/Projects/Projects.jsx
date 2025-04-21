import React from "react";import styled from "styled-components";
import SliderComp from "./Slider";
import { Zoom } from "react-awesome-reveal";

const Projects = () => {
  return (
    <Container id="project">
      <Zoom>
        <h1>
          الصفوف <span className="green">الدراسية</span>
        </h1>
        <p>
          استعد لرحلة ممتعة ومثيرة في عالم الرياضيات مع مهندس متخصص في تدريس
          الرياضيات للطلاب في الصفوف الإعدادية والثانوية. يقدم مهندسنا الخبير
          دعما فرديا وتوجيها مخصصا لكل طالب، مما يساعدهم على تطوير مهاراتهم
          الرياضية وتحقيق النجاح الأكاديمي. من خلال استخدام أساليب تعليمية
          مبتكرة ومنهج شامل، يساعد المهندس الطلاب على فهم المفاهيم الرياضية بشكل
          أعمق وأكثر متعة. بغض النظر عن مستوى الطالب أو مهاراته الحالية في
          الرياضيات، يعمل المهندس على بناء الثقة وتعزيز الفهم من خلال تفاعل
          مستمر وتحفيز إيجابي. انضم إلينا اليوم لتجربة فريدة وممتعة في تعلم
          الرياضيات والتحضير لمستقبل ناجح ومشرق
        </p>
      </Zoom>
      <Slide>
        <SliderComp />
      </Slide>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  position: relative;
  @media (max-width: 840px) {
    width: 90%;
  }
  h1 {
    font-size: 1.9rem;
  }

  p {
    font-size: 25px;
    letter-spacing: 2px;
    line-height: 35px;
    margin: 0 auto;
    padding: 1rem 0;

    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;

const Slide = styled.div``;
