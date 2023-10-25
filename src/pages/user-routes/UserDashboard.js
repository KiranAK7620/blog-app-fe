import React from "react";
import Base from "../../components/Base";
import AddPost from "../../components/AddPost";
import { Col, Container, Row } from "reactstrap";

const UserDashboard = () => {
  return (
    <Base>
      <Container className="my-3">
        <Row>
          <Col>
            <AddPost />
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default UserDashboard;
