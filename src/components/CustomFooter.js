import React from "react";
import { Col, Container, Row } from "reactstrap";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebookF } from 'react-icons/fa';

export const CustomFooter = () => {
  return (
    <div className="bg-dark text-light mt-5">
      <footer className="bg-dark text-light py-4">
        <Container>
          <Row className="d-flex justify-content-between">
            <Col md="6">
              <h5>About Us</h5>
              <p>
                Blogify is the ultimate platform for passionate writers,
                bloggers, and content creators to express their thoughts, share
                their experiences, and connect with a global audience. With our
                intuitive and feature-rich blogging application, you can embark
                on your writing journey, establish your online presence, and
                engage with a community of like-minded individuals.
              </p>
            </Col>
            <Col md="6">
              <h5>Contact Us</h5>
              <p>Email: contact@blogify.com</p>
              <p>Phone: (+91) 7620926860</p>
              <div className="social-icons" style={{fontSize:'30px', marginRight:'10px',color:'#fff'}}>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{marginRight:'10px'}}>
                  <FaFacebookF />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{marginRight:'10px'}}>
                  <FaTwitter />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{marginRight:'10px'}}>
                  <FaInstagram />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{marginRight:'10px'}}>
                  <FaLinkedin />
                </a>
              </div>
            </Col>
          </Row>
          <hr />
          <p className="text-center">
            © {new Date().getFullYear()} Blogify : Developed by Kiran kadam
          </p>
        </Container>
      </footer>
    </div>
  );
};
