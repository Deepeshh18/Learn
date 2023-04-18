import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./testimonial.css";
import Images from "../Images/man.png";
import Stick from 'react-stick';

const Testimonial = () => {
  const settings = {
    Infinite: true,
    dots:true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slideSToScroller: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="testimonial_wrapper d-flex justify-content-between">
              <div className="testimonial_img w-50">
                <img src={Images} alt="" className="w-100" />
              </div>
              <div className="testimonial_content w-50">
                <h2 className="mb-4">Our Students Voice</h2>
                <Stick {...settings}>
                  <div>
                    <div className="single_testimonial">
                      <h5>Excellent course of materials</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus deserunt natus culpa repellendus sed ad
                        aliquam quo in laborum perferendis?
                      </p>
                      <div className="student_info">
                        <h6>Deepesh Yadav</h6>
                        <p>India</p>
                      </div>
                    </div>
                  </div>
                </Stick>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
