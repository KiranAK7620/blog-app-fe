import React from "react";
import Base from "../components/Base";
import NewFeed from "../components/NewFeed";
import { Col, Container, Row } from "reactstrap";
import CategorySideMenu from "../components/CategorySideMenu";

const Home = () => {
  return (
    <Base>
      <Container className="mt-3">
        <Row>
          <Col md={3} className="pt-3">
            <CategorySideMenu />
          </Col>

          <Col md={9}>
            <NewFeed />
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Home;
