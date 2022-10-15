import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as changeCurrentTab from "../../redux/actions/changeCurrentTab";
import * as userActions from "../../redux/actions/userActions";
import * as postActions from "../../redux/actions/postActions";

import { Container, Row, Col } from "reactstrap";
import {
  TabButton,
  ButtonArea,
  TabContent,
} from "../../components/Profile/TabsElements";

import Posts from "../../components/Posts";
import AboutMe from "../../components/Profile/AboutMe";
import AddPost from "../../components/Posts/AddPost";

const Profil = (props) => {
  let params = useParams();

  async function getUser(nickname) {
    await props.actions.getUser(nickname);

    getPosts(props.user.uId);
    getFollowers(props.user.uId);
  }

  async function getPosts(uId) {
    await props.actions.getPostByUserId(props.user.uId);
  }

  async function getFollowers(uId) {
    await props.actions.getFollowers(uId);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getUser(params.nickname);
  }, []);

  return (
    <div>
      {console.log(params.nickname)}
      {console.log(props.user)}
      <Container style={{ paddingTop: "90px" }}>
        <Row
          className="d-flex justify-content-center align-items-center flex-d-col"
          style={{ marginTop: "0px" }}
        >
          <Col md="6" className="d-flex justify-content-center">
            <AboutMe width="100%" height="350px" user={props.user} />
          </Col>
          <Col md="6">
            <ButtonArea className="d-flex justify-content-center">
              <TabButton
                onClick={() => {
                  props.actions.changeTab(0);
                }}
                active={props.currentTab === 0 ? true : false}
                outline
              >
                Fotoğraflar
              </TabButton>
              <TabButton
                onClick={() => {
                  props.actions.changeTab(1);
                }}
                active={props.currentTab === 1 ? true : false}
                outline
              >
                Yazılar
              </TabButton>
            </ButtonArea>
            <TabContent>
              {window.innerWidth > 999 ? <AddPost /> : ""}
              {props.currentTab === 0 ? (
                <Posts posts={props.posts} />
              ) : (
                "Sadece Yazılı Postlar deneme"
              )}
            </TabContent>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentTab: state.tabsReducer,
    user: state.getUserByNickname,
    posts: state.postListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      changeTab: bindActionCreators(changeCurrentTab.changeTab, dispatch),
      getUser: bindActionCreators(userActions.getUserByNickname, dispatch),
      getPostByUserId: bindActionCreators(
        postActions.getPostByUserId,
        dispatch
      ),
      getFollowers: bindActionCreators(
        userActions.getFollowersByUserId,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
