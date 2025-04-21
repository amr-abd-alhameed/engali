import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import { FaUniversity, FaSchool } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4 className="green">خدماتي</h4>
        <h1>
          استفد من خبرة مهندس رياضيات محترف في تدريس المواد الرياضية بطرق مبتكرة
          ومبسطة. ستحصل على دعم فردي وتوجيه مخصص لتحسين فهمك وأدائك في الرياضيات
          بطريقة ممتعة وفعالة
        </h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdOutlineSchool}
            title={"دروس خاصة"}
            disc={` احصل على تعليم رياضيات ممتاز مع مهندس متخصص في التدريس . تجربة تعليمية لن تتكر مبنية على دراسات علمية`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FaSchool}
            title={"المرحلة الأعداد"}
            disc={`  استعد للتحديات الرياضية  مع مهندس متخصص في تدريس الرياضيات، واستمتع بتطوير مهاراتك بطريقة مبتكرة ومشوقة.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FaUniversity}
            title={"المرحلة الثانوية"}
            disc={`احصل على توجيه متخصص ودعم قوي في الرياضيات من مهندس محترف لتحقيق النجاح في الدراسات الثانوية والاستعداد الجيد للامتحانات`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h4 {
    text-align: center;

    font-size: 30px;
  }

  h1 {
    padding-top: 1rem;
    text-align: center;
    font-size: 30px;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
