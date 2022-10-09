import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import { Input, SigninCard } from "../components/Login/LoginPageElements";
import SignUpModal from "../components/Login/SignUpModal";

const Login = ({ token }) => {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();

    const url = "http://localhost:3000/login";
    axios
      .post(url, data)
      .then((res) => {
        localStorage.setItem("token", res.token);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Container style={{ paddingTop: "90px" }}>
        <SignUpModal show={modalShow} onHide={() => setModalShow(false)} />
        <Row className="d-flex justify-content-center align-items-center">
          {/* <Col>B! SOCIAL tanıdıklarınla iletişim kurmanı sağlar.</Col> */}
          <Col md={4} lg={4} className="d-flex justify-content-end">
            <img
              src="https://www.instagram.com/static/images/homepage/phones/home-phones-2x.png/cbc7174b4f05.png"
              width="450px"
            />
          </Col>
          <Col md={4} lg={4}>
            <SigninCard>
              <Form>
                <FormGroup>
                  <Input
                    name="email"
                    type="text"
                    onChange={handleChange}
                    placeholder="E-posta veya Telefon Numarası"
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    placeholder="Şifre"
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Button
                    onClick={handleSubmit}
                    className="w-100 py-2"
                    color="success"
                  >
                    Giriş Yap
                  </Button>
                </FormGroup>
              </Form>
              <Link to="/" className="text-decoration-none text-center">
                Şifreni mi unuttun?
              </Link>
              <hr></hr>
              <Button
                className="btn btn-success"
                onClick={() => setModalShow(true)}
              >
                Yeni Hesap Oluştur
              </Button>
            </SigninCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
