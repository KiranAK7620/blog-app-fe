// import React from "react";
import { Col, Container, Row } from "reactstrap";
import userContext from "../context/userContext";
import Base from "../components/Base";

const About = () => {
  return (
    <userContext.Consumer>
      {(object) => (
        <Base>
          <Container>
            <Row className="my-5">
              <Col>
                <h1 className="mb-4">About Blogify</h1>
                <p>
                  Welcome to Blogify, your creative space for sharing thoughts,
                  ideas, and experiences with the world.
                </p>
                <p>
                  Blogify is a platform designed for bloggers, writers, and
                  content creators who want to make their mark on the internet.
                  We understand the power of words and storytelling, and we
                  provide the tools to help you share your voice with a global
                  audience.
                </p>
                <p>
                  At Blogify, we're passionate about providing a user-friendly
                  and feature-rich environment for our users. Our mission is to
                  empower creators like you to express yourself, connect with
                  your readers, and build your online presence.
                </p>
              </Col>
            </Row>
            <Row className="my-5">
              <Col>
                <h2>Our Team</h2>
                <p>
                  Meet the dedicated team behind Blogify. We're a group of
                  individuals who are passionate about technology and content
                  creation. Our goal is to provide you with the best possible
                  platform to share your stories and ideas.
                </p>
                <ul>
                  {/* <li>{object.user.login && object.user.data.name}</li> */}
                  <li>KIRAN KADAM</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Base>
      )}
    </userContext.Consumer>
  );
};

export default About;
