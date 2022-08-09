import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as showHidePostlab from "../../redux/actions/showHidePostlab";
import "./style.scss";

import {
  Nav,
  Logo,
  LogoImg,
  NavLink,
  NavMenu,
  // ! NavBtn,
  // ! NavBtnLink,
  OutlineHomeIcon,
  BellIcon,
  RegUserIcon,
  OutlineAddBoxIcon,
  NavLinkMsg,
  ButtoN,
  SearchIcon,
  OutlineMessageIcon,
} from "./NavBarElements";

const MobileNav = (props) => {
  return (
    <>
      <Nav className="mobile-nav mobile-nav-header">
        <Logo to="/">
          <LogoImg src={props.logo} alt="Logo" />
        </Logo>
        <NavMenu>
          <NavLinkMsg className="px-0 border-0" to="/direct">
            <OutlineMessageIcon />
          </NavLinkMsg>
        </NavMenu>
      </Nav>

      <Nav className="mobile-nav mobile-nav-menu">
        <NavMenu>
          <NavLink to="/">
            <OutlineHomeIcon />
          </NavLink>
          <NavLink to="/search">
            <SearchIcon />
          </NavLink>
          <ButtoN
            onClick={() => {
              props.toggleAddPost === 0
                ? props.actions.addPostToggle(1)
                : props.actions.addPostToggle(0);
            }}
          >
            <OutlineAddBoxIcon />
          </ButtoN>
          <NavLink to="/notifications">
            <BellIcon />
          </NavLink>

          <NavLink to={"/me/" + props.user.username}>
            <RegUserIcon />
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

function mapStateToProps(state) {
  return {
    toggleAddPost: state.showAddPostReducer,
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

export default connect(mapStateToProps, mapDispatchToProps)(MobileNav);
