import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Modal } from "react-bootstrap";

import { UserThumbnail, PostTitle, AddPostButton } from "../root/RootElements";
import { PhotoVideoIcon, EmojiLaughingIcon } from "../root/Icons";

const AddPostModal = (props) => {
  const [count, setCount] = useState();

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          className="fw-600 text-center d-flex justify-content-center"
          closeButton
        >
          <h5 style={{ marginBottom: "0px" }}>Gönderi Oluştur</h5>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center mb-2">
            <UserThumbnail src={props.about.userPhoto} />{" "}
            <PostTitle className="mb-0" tag="h6">
              {props.about.firstname + " " + props.about.lastname}
            </PostTitle>
          </div>
          <Form>
            <FormGroup>
              <Input //if string size of bigger than 100char size, font-size : 17px
                className={`add-post-text-area ${
                  count > 150 ? "fs-17" : "fs-24"
                }`}
                type="textarea"
                onChange={(e) => {
                  setCount(e.target.value.length);
                }}
                placeholder="Ne düşünüyorsun, Oğuzhan?"
                rows="5"
              />
            </FormGroup>
            <FormGroup className="d-flex justify-content-center align-items-center">
              <AddPostButton // background-color: #e9e9e9;
                onClick={() => {
                  props.actions.addPostModal(true);
                }}
                md="5"
                className="btn add-photo-video"
              >
                <PhotoVideoIcon />
                Fotoğraf / Video
              </AddPostButton>
              <AddPostButton
                onClick={() => {
                  props.actions.addPostModal(true);
                }}
                md="5"
                className="btn add-feeling"
              >
                <EmojiLaughingIcon />
                His / Hareket
              </AddPostButton>
            </FormGroup>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddPostModal;
