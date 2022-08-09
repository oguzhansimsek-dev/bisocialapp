import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal } from "react-bootstrap";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";
import { FollowBtn, FollowerUsers, FollowerUserItem } from "./ProfileElements";
import "./style.scss";
import { UserThumbnail } from "../root/RootElements";

const FollowModal = (props) => {
  const [follow, setFollow] = useState(true);
  const [hrMargin, setHrMargin] = useState("0%");

  const followUser = () => {
    if (follow === false) {
      setFollow(true);
    } else if (follow === true) {
      setFollow(false);
    }
  };

  const getUsers = (u) => {
    return (
      <FollowerUserItem id={u.userId} key={u.userId}>
        <UserThumbnail src={u.userImg}></UserThumbnail>
        {u.firstname} {u.lastname}
        <FollowBtn
          onClick={() => {
            followUser();
          }}
        >
          {follow ? "Takip ediliyor" : "Takip Et"}
        </FollowBtn>
      </FollowerUserItem>
    );
  };

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        style={{ borderRadius: "8px !important" }}
        centered
      >
        <Modal.Header className="p-0" closeButton>
          <ListGroup className="menu">
            <ListGroupItem
              onClick={() => {
                setHrMargin("0%");
              }}
              className={hrMargin === "0%" ? "text-active" : "text-pasif"}
            >
              Takipçiler
            </ListGroupItem>
            <ListGroupItem
              onClick={() => {
                setHrMargin("100%");
              }}
              className={hrMargin === "100%" ? "text-active" : "text-pasif"}
            >
              Takip Edilenler
            </ListGroupItem>
            <hr style={{ marginLeft: hrMargin }} />
          </ListGroup>
        </Modal.Header>

        <Modal.Body>
          {/* Takipçi Listesi */}
          <FollowerUsers>
            {props.followers.map((u) => {
              return getUsers(u);
            })}
          </FollowerUsers>
        </Modal.Body>
      </Modal>
    </>
  );
};

function mapStateToProps(state) {
  return {
    followers: state.getFollowers,
  };
}

export default connect(mapStateToProps)(FollowModal);
