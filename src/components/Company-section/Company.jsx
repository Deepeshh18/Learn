import React from "react";
import { Row, Col } from "reactstrap";

const Company = () => {
  return (
    <section>
      <Row>
      <div className="d-flex align-item-center justify-content-between">
        <Col lg="1" md="4"><h2 className="d-flex align-item-center gap-2"><i class="ri-vimeo-line"></i></h2>Vimeo</Col>
        <Col lg="1" md="4"><h2 className="d-flex align-item-center gap-1"><i class="ri-pinterest-line"></i></h2>Pinterest</Col>
        <Col lg="1" md="4"><h2 className="d-flex align-item-center gap-2"><i class="ri-dribbble-line"></i></h2>Dribble</Col>
        <Col lg="1" md="4"><h2 className="d-flex align-item-center gap-1"><i class="ri-apple-fill"></i></h2>Apple</Col>
        <Col lg="1" md="4"><h2 className="d-flex align-item-center gap-1"><i class="ri-finder-fill"></i></h2>Finder</Col>
        <Col lg="1" md="4"><h2 className="d-flex align-item-center gap-1"><i class="ri-google-fill"></i></h2>Google</Col>
      </div>
      </Row>
    </section>
  );
};

export default Company;
