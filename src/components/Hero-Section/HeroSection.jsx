import React from "react";
import { Container, Row, Col } from "reactstrap";
import Images from "../Images/children-g7f6183226_1920.jpg";
import "./Hero-section.css";

const HeroSection = () => {
  return (
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <h2 className="mb-4">
                <h2>Anytime Anywhere </h2>
                <h2>Learn On Your</h2>
                <h2>Suitable Schedule</h2>
              </h2>

              <p className="mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                debitis. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Animi laudantium nam sunt quas a! Sunt.
              </p>

              <div className="search">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2 mb-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success  mb-2" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={Images} alt=""  width={"100"} height={"300px"} className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default HeroSection;
