import React from "react";

import { Container, Row, Col, CardImg } from "reactstrap";
import { Modal } from "react-bootstrap";

const PostModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>Başlık</Modal.Header>
        <Container>
          <Row>
            <Col
              md="7"
              style={{ border: "1px solid black", minHeight: "500px" }}
            ></Col>
            <Col
              md="5"
              style={{ border: "1px solid black", minHeight: "500px" }}
            >
              Post Yorumlar
            </Col>
          </Row>
        </Container>
      </Modal>
    </>
  );
};

export default PostModal;
