import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col } from "reactstrap";

//* Components
import Posts from "../../components/Posts";
import AboutMe from "../../components/Profile/AboutMe";
import AddPost from "../../components/Posts/AddPost";
import { RightSideBar } from "../../components/root/RootElements";
import FriendList from "../../components/FriendList";

//* Actions
import * as postActions from "../../redux/actions/postActions";

const MainPage = (props) => {
  const getPosts = () => {
    props.actions.getPosts();
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Container style={{ paddingTop: "90px" }}>
        <Row className="d-flex justify-content-center">
          <Col md={11} lg={6}>
            {window.innerWidth > 999 ? <AddPost /> : ""}

            {/*props.toggleAddPost === 1 ? <AddPost /> : null */}
            <Posts posts={props.posts} />
          </Col>
          <Col className="d-flex justify-content-end" md={11} lg={3}>
            {window.innerWidth < 1000 ? (
              ""
            ) : (
              <RightSideBar>
                {/**<AboutMe width="auto" height="400px" /> */}
                <FriendList />
              </RightSideBar>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

function mapStateToProps(state) {
  return {
    toggleAddPost: state.addPostReducer,
    posts: state.postListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPosts: bindActionCreators(postActions.getPosts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
