import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Modal } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";

import { UserThumbnail, PostUserName, PostText } from "../root/RootElements";

const PostDetailModal = (props) => {
  const profilePath = "/bi/";

  const commentArea = (comments) => {
    if (comments != null) {
      comments.map((comment) => {
        return (
          <PostText key={comment.cId}>
            <Link
              to={profilePath + "eiqer"}
              className="text-decoration-none text-dark"
            >
              <PostUserName>Onur Şimşek</PostUserName>
              {comment.comment}
            </Link>
          </PostText>
        );
      });
    } else {
      return "İlk yorum yapan sen ol.";
    }
  };

  const withPhoto = (props) => {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>Başlık</Modal.Header>
        <Container>
          <Row>
            <Col md="7" style={{ minHeight: "500px" }}>
              <Carousel autoPlay={false} showThumbs={false} swipeable={true}>
                {props.post.photos == null
                  ? ""
                  : props.post.photos.map((photo) => {
                      return (
                        <div key={photo.phId}>
                          <img src={photo.phUrl} alt="resim" />
                        </div>
                      );
                    })}
              </Carousel>
            </Col>
            {/** Yorum Alanı */}
            <Col md="5" style={{ minHeight: "500px" }}>
              <PostText>
                <Link
                  to={profilePath + "eiqer"}
                  className="text-decoration-none text-dark"
                >
                  <PostUserName>Oğuzhan Şimşek</PostUserName>
                </Link>
                {props.post.pText}
              </PostText>

              {commentArea(props.post.comments)}
            </Col>
          </Row>
          {console.log(props.post)}
        </Container>
      </Modal>
    );
  };

  const noPhoto = (props) => {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>Başlık</Modal.Header>
        <Container>
          <Row>
            <Col md="12" style={{ minHeight: "500px" }}>
              <PostText>
                <Link
                  to={profilePath + "eiqer"}
                  className="text-decoration-none text-dark"
                >
                  <PostUserName>Oğuzhan Şimşek</PostUserName>
                </Link>
                {props.post.pText}
              </PostText>
              {commentArea(props.post.comments)}
            </Col>
          </Row>
          {console.log(props.post)}
        </Container>
      </Modal>
    );
  };

  return <>{props.post.photos != null ? withPhoto(props) : noPhoto(props)}</>;
};

function mapStateToProps(state) {
  return {
    post: state.getPostByPostId,
  };
}

export default connect(mapStateToProps)(PostDetailModal);
