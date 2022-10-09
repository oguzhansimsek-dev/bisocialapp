import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Form, FormGroup, Input, Row, Col, FormFeedback } from "reactstrap";
import { Button } from "./SignUpElements";
import Spinner from "react-bootstrap/Spinner";

// TODO useState i useeffect ile kullanıp fonksiyonun bir kere çalışmasını sağla. []

const SignUpModal = (props) => {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({ genderId: 1 });

  const [userInputLoading, setUserInputLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    props.onHide();

    fetch("https://localhost:7271/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("Data Sended");
    });

    console.log(data);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    //* İnputlara geçerli veri girilmesi hata yönetimi

    setData((prevData) => ({ ...prevData, [name]: value }));

    if (value)
      setErrors((previousErrors) => ({ ...previousErrors, [name]: false }));
    else setErrors((previousErrors) => ({ ...previousErrors, [name]: true }));

    /* console.log(name + ": " + value); */
  }

  useEffect(() => {
    setUserInputLoading(true);

    const timeOutId = setTimeout(() => checkUsername(data.nickname), 500);
    return () => clearTimeout(timeOutId);
  }, [data.nickname]);

  function checkEmail(email) {
    const condition = ["@ogrenci.bilecik.edu.tr"];
  }

  useEffect(() => {
    checkEmail(data.email);
  }, [data.email]);

  function checkUsername(nickname) {
    //Backend'e istek
    const usernames = ["eiqer", "sego123"];

    if (usernames.includes(nickname)) {
      setErrors((previousErrors) => ({ ...previousErrors, nickname: true }));
    }
    setUserInputLoading(false);
  }
  /**console.log(errors); */

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Kaydol</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <FormGroup className="d-flex justify-content-space">
                <Col sm="12" md="12" style={{ position: "relative" }}>
                  <Input
                    autoComplete="off"
                    name="nickname"
                    label="User name"
                    onChange={handleChange}
                    placeholder="Kullanıcı adınız"
                    invalid={errors.nickname}
                  />
                  {userInputLoading && (
                    <Spinner
                      animation="border"
                      size="sm"
                      style={{ position: "absolute", top: 10, right: 10 }}
                    />
                  )}
                  <FormFeedback valid={false}>
                    Bu kullanıcı adı alınamaz!!
                  </FormFeedback>
                </Col>
              </FormGroup>

              <Col sm="12" md="6">
                <FormGroup className="d-flex justify-content-space">
                  <Input
                    autoComplete="off"
                    name="firstname"
                    label="First name"
                    onChange={handleChange}
                    placeholder="Adınız"
                    invalid={errors.firstname}
                  />
                </FormGroup>
              </Col>
              <Col sm="12" md="6">
                <FormGroup>
                  <Input
                    autoComplete="off"
                    name="lastname"
                    label="Last name"
                    onChange={handleChange}
                    placeholder="Soyadınız"
                    invalid={errors.lastname}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Input
                autoComplete="off"
                name="email"
                label="Email"
                onChange={handleChange}
                placeholder="Cep telefonu numarası veya e-posta"
                invalid={errors.email}
              />
            </FormGroup>
            <FormGroup>
              <Input
                autoComplete="off"
                name="password"
                label="password"
                onChange={handleChange}
                type="password"
                placeholder="Şifre"
                invalid={errors.password}
              />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button
            className="btn btn-success"
            type="submit"
            onClick={handleSubmit}
          >
            Kaydol
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default SignUpModal;
