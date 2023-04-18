import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const footerQuickLink = [
  {
    display: 'Home',
    url:'#'
},
{
    display: 'AboutUs',
    url:'#'
},
{
    display: 'Features',
    url:'#'
},
{
    display: 'Courses',
    url:'#'
},

{
    display: 'FreeCourse',
    url:'#'
},

];

const footerInfoLink = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },
  {
    display: "Purcheses Guide",
    url: "#",
  },
  {
    display: "Terms of services",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <h2 className="d-flex  align-items-center gap-1">
              <i class="ri-pantone-line"></i> Education.
            </h2>
            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="https://www.instagram.com/d_eep_esh/">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
              <span>
                {" "}
                <a href="https://www.linkedin.com/in/deepesh-yadav-5b5612226">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>
              <span>
                {" "}
                <a href="https://twitter.com/d_eep_esh?t=f1loaHG15ObOK1BT5FQMrQ&s=09">
                  <i class="ri-twitter-fill"></i>
                </a>
              </span>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="fw-bolt">Explore</h5>
            <ListGroup>
              {footerQuickLink.map((item, index) => (
                <ListGroup.Item
                  key={index}
                  className="border-0 ps-0 link_items"
                >
                  <a href={item.url}>{item.display}</a>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="fw-bolt">Information</h5>
            <ListGroup>
              {footerInfoLink.map((item, index) => (
                <ListGroup.Item
                  key={index}
                  className="border-0 ps-0 link_items"
                >
                  <a href={item.url}>{item.display}</a>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="fw-bolt">Get in touch</h5>
            <div>
              <p>Address: Khargone,Madhya Pradesh, India</p>
              <p>Phone: +88 888 88888 </p>
              <p>Email: example@gamil.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
