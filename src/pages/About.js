import React from "react";
import Base from "../components/Base";
import { Col, Container, Row } from "reactstrap";

const About = () => {
  return (
    <Base>
      {/* <div className='ps-5 pe-5 pt-3'>
            <h3 style={{textAlign: 'center'}}>Welcome To <span id="W_Name1">MyBlogs</span></h3>
            <p><span id="W_Name2">MyBlogs</span> is a Professional <span id="W_Type1">Blogging </span> Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of <span id="W_Type2">Blogging </span>, with a focus on dependability and <span id="W_Spec">Blogging</span>. We're working to turn our passion for <span id="W_Type3">Blogging </span> into a booming <a href="https://www.blogearns.com/2021/05/free-about-us-page-generator.html" rel="do-follow" style={{color: 'inherit', textDecoration: 'none'}}>online website</a>. We hope you enjoy our <span id="W_Type4">Blogging </span> as much as we enjoy offering them to you.</p>
            <p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
            <p style={{textAlign: 'center',fontWeight:'bold' , marginBottom:'0px !important'}}>Thanks For Visiting Our Site<br/><br/>
                <span style={{color: 'blue',fontSize: '16px', fontWeight: 'bold', textAlign: 'center'}}>
                    Have a nice day!
                </span>
            </p>
            </div> */}
      <Container>
        <Row className="my-5">
          <Col>
            <h1 className="mb-4">About Blogify</h1>
            <p>
              Welcome to Blogify, your creative space for sharing thoughts,
              ideas, and experiences with the world.
            </p>
            <p>
              Blogify is a platform designed for bloggers, writers, and content
              creators who want to make their mark on the internet. We
              understand the power of words and storytelling, and we provide the
              tools to help you share your voice with a global audience.
            </p>
            <p>
              At Blogify, we're passionate about providing a user-friendly and
              feature-rich environment for our users. Our mission is to empower
              creators like you to express yourself, connect with your readers,
              and build your online presence.
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
              <li>Kiran kadam</li>
              <li>Kedar Jadhav</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default About;
