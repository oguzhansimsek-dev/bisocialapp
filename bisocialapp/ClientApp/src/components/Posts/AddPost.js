import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import AddPostModal from "./AddPostModal";
import { Card, CardBody, Form, CardFooter } from "reactstrap";
import {
  UserThumbnail,
  WhatDoUThink,
  AddPostButton,
} from "../root/RootElements";
import { PhotoVideoIcon, EmojiLaughingIcon } from "../root/Icons";

import * as functionsAction from "../../redux/actions/functionsAction";

const AddPost = (props) => {
  const [showAddPostModal, setAddPostModal] = useState(false);

  return (
    <>
      <Card
        className="mb-4 p-3 pb-0"
        style={{ borderRadius: "8px", overflow: "hidden" }}
      >
        <Form>
          <CardBody className="d-flex align-items-center">
            <Link to={"/me/" + props.about.username}>
              <UserThumbnail src={props.about.userPhoto} />
            </Link>
            <WhatDoUThink
              onClick={() => {
                props.actions.addPostModal(true);
              }}
            >
              {"Ne düşünüyorsun, " + props.about.firstname + " ?"}
            </WhatDoUThink>
          </CardBody>
          <CardFooter className="d-flex justify-content-center">
            <AddPostButton // background-color: #e9e9e9;
              onClick={() => {
                props.actions.addPostModal(true);
              }}
              md="4"
              lg="5"
              className="btn add-photo-video"
            >
              <PhotoVideoIcon />
              Fotoğraf / Video
            </AddPostButton>
            <AddPostButton
              onClick={() => {
                props.actions.addPostModal(true);
              }}
              md="4"
              lg="5"
              className="btn add-feeling"
            >
              <EmojiLaughingIcon /> His / Hareket
            </AddPostButton>
          </CardFooter>
        </Form>
      </Card>
      {showAddPostModal === true ? <AddPostModal /> : ""}
    </>
  );
};

function mapStateToProps(state) {
  return {
    about: state.loginReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addPostModal: bindActionCreators(functionsAction.addPostModal, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
