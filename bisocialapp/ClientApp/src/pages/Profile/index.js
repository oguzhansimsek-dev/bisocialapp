import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as changeCurrentTab from "../../redux/actions/changeCurrentTab";

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
  return (
    <div>
      <Container style={{ paddingTop: "90px" }}>
        <Row
          className="d-flex justify-content-center align-items-center flex-d-col"
          style={{ marginTop: "0px" }}
        >
          <Col md="6" className="d-flex justify-content-center">
            <AboutMe width="100%" height="350px" />
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
                <Posts />
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      changeTab: bindActionCreators(changeCurrentTab.changeTab, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
