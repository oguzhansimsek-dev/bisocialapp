import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as showHidePostlab from "../../redux/actions/showHidePostlab";
import SearchBar from "./SearchBar";

import {
  Nav,
  NavLink,
  NavMenu,
  Logo,
  OutlineHomeIcon,
  BellIcon,
  RegUserIcon,
  OutlineMessageIcon,
  OutlineAddBoxIcon,
  ButtoN,
  LogoImg,
  NotificationBar,
} from "./NavBarElements";
import {
  Container,
  Row,
  Col,
  PopoverBody,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import "./style.scss";

const NavBar = (props) => {
  return (
    <>
      <Nav className="desktop-nav">
        <Container>
          <Row className="d-flex justify-content-center h-100">
            <Col
              lg="9"
              className={
                "d-flex " +
                (window.innerWidth < 1000
                  ? "justify-content-center"
                  : "justify-content-between")
              }
              style={{ flexDirection: "row" }}
            >
              <Logo to="/">
                <LogoImg src={props.logo} alt="Logo" />
              </Logo>
              {/* <Bars /> */}
              <SearchBar
                disableButtonText="Cancel"
                placeholder="Search in items"
                clearButton={true}
              ></SearchBar>

              <NavMenu>
                <NavLink to="/">
                  <OutlineHomeIcon />
                </NavLink>
                <NavLink to="/direct">
                  <OutlineMessageIcon />
                </NavLink>
                <ButtoN id="PopoverLegacy" type="button">
                  <BellIcon />
                </ButtoN>
                <NotificationBar
                  placement="bottom"
                  target="PopoverLegacy"
                  trigger="legacy"
                >
                  <PopoverBody>
                    <ListGroup>
                      <ListGroupItem>Bildirim 1</ListGroupItem>
                    </ListGroup>
                  </PopoverBody>
                </NotificationBar>
                <NavLink to={"/me/" + props.user.username}>
                  <RegUserIcon />
                </NavLink>
              </NavMenu>
            </Col>
          </Row>
        </Container>

        {/*<NavBtn>
          <NavBtnLink to="/login">Sign In</NavBtnLink>
        </NavBtn> */}

        {/* --Post ekleme butonu <ButtoN
                  onClick={() => {
                    props.toggleAddPost === 0
                      ? props.actions.addPostToggle(1)
                      : props.actions.addPostToggle(0);
                  }}
                >
                  <OutlineAddBoxIcon />
                </ButtoN> */}
      </Nav>
    </>
  );
};

function mapStateToProps(state) {
  return {
    toggleAddPost: state.addPostReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addPostToggle: bindActionCreators(
        showHidePostlab.addPostToggle,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
