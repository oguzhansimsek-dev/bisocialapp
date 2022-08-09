import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

const Messages = () => {
  return (
    <>
      <Container style={{ paddingTop: "90px" }}>
        Mesaj Listesi
        <Link to="/direct:id">Mesaj</Link>
      </Container>
    </>
  );
};

export default Messages;
