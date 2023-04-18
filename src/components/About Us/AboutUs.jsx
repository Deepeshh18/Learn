import React from "react";
import { Container, Row, Col } from "reactstrap";
import Images from "../Images/removebg.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col className=" d-flex justify-content-center" lg="6" md="6">
            <div className="about_img mx-auto d-flex justify-content-center align-items-center">
              <img src={Images} alt="" width={"1500px"} height={"400"} />
              <div className="about_content m-3">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, animi.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, voluptates.
                </p>
                <div className="about_counter">
                  <div className="single_counter d-flex  gap-3">
                    <span className="counter w-50">
                      <CountUp start={0} end={2} duration={80} suffix="K" />
                      <p className="counter_title">
                        <h6>Completed Projects</h6>
                      </p>
                    </span>
                    <span className="counter ">
                      <CountUp start={0} end={2} duration={80} suffix="M" />
                      <p className="counter_title">
                        <h6>Patient Around World</h6>
                      </p>
                    </span>
                  </div>
                  <div className="single_counter d-flex gap-3">
                    <span className="counter w-50">
                      <CountUp start={0} end={2} duration={80} suffix="K" />
                      <p className="counter_title">
                       <h6>Ideas Raised Funds</h6>
                      </p>
                    </span>
                    <span className="counter">
                      <CountUp start={0} end={2} duration={80} suffix="M" />
                      <p className="counter_title">
                        <h6>Categories Served</h6>
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
