import { useState, useEffect } from "react";
import { Form, FormGroup, Input, Row, Col, Button } from "reactstrap";

const UserInfo = (props) => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState(props.userInfo);

  // * Formda güncellenecek kullanıcı verisi.

  useEffect(() => {
    setForm({ ...props.userInfo, password: "" });
  }, [props.userInfo]);

  //* İşlemi iptal etme
  function cancelSubmit(event) {
    console.log("Data didn't send..");
    setForm({ ...props.userInfo, password: "" });
    props.onHide();
    event.preventDefault();
  }

  //* Form gönderme işlemi
  function handleSubmit(event) {
    //* Şifre kontrolü yapılıyor.
    if (props.userInfo.password === form.password) {
      console.log("Data sended..");
      props.onHide();
      console.log(form);
      event.preventDefault();
    } else {
      setErrors((previousErrors) => ({ ...previousErrors, password: true }));
    }
  }

  //* Hata kontrolü
  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prevUserinfo) => ({ ...prevUserinfo, [name]: value }));

    if (value === "") {
      setErrors((previousErrors) => ({ ...previousErrors, [name]: true }));
    } else {
      setErrors((previousErrors) => ({ ...previousErrors, [name]: false }));
    }
  }
  return (
    <div>
      <Form>
        <Input type="hidden" id={props.userInfo.id} />
        <Row>
          <Col sm="12" md="4">
            <FormGroup className="d-flex justify-content-space">
              <Input
                type="text"
                name="firstname"
                label="First name"
                value={form.firstname}
                onChange={handleChange}
                invalid={errors.firstname}
              />
            </FormGroup>
          </Col>
          <Col sm="12" md="4">
            <FormGroup>
              <Input
                type="text"
                name="lastname"
                label="Last name"
                value={form.lastname}
                onChange={handleChange}
                invalid={errors.lastname}
              />
            </FormGroup>
          </Col>
          <Col sm="12" md="4">
            <FormGroup>
              <Input
                type="text"
                name="username"
                label="User name"
                value={form.username}
                onChange={handleChange}
                invalid={errors.username}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Input
            style={{ maxHeight: "110px" }}
            type="textarea"
            name="bio"
            label="Bio name"
            rows="4"
            value={form.bio}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            name="email"
            label="Email"
            value={form.email}
            onChange={handleChange}
            invalid={errors.email}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            label="password"
            onChange={handleChange}
            placeholder="Şifre"
            invalid={errors.password}
          />
        </FormGroup>
      </Form>
      <Button
        className="btn btn-danger mr-2"
        type="submit"
        onClick={cancelSubmit}
      >
        Kaydetme
      </Button>
      <Button className="btn btn-success" type="submit" onClick={handleSubmit}>
        Bilgilerimi Güncelle
      </Button>
    </div>
  );
};

export default UserInfo;
