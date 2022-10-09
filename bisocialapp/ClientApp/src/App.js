import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// * Navigation Components
import NavBar from "./components/NavBar";
import MobileNav from "./components/NavBar/MobileNav";
// * Logos
import LogoLight from "../src/assets/images/LogoLight.png";
import LogoDark from "../src/assets/images/LogoDark.png";
// * Pages
import MainPage from "./pages/MainPage";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Messages from "./pages/Messages";
import Message from "./pages/Messages/Message";

// * Components
import SettingModal from "./components/SettingsModal/SettingModal";
import PostDetailModal from "./components/Posts/PostDetailModal";
import AddPostModal from "./components/Posts/AddPostModal";
import Signup from "./pages/Signup";
import FollowModal from "./components/Profile/FollowModal";

//* Fonksiyonlar
import * as functionsAction from "./redux/actions/functionsAction";
import * as loginActions from "./redux/actions/loginActions";

function App(props) {
  const [logo, setLogo] = useState(LogoLight);
  const storedTheme = localStorage.getItem("theme");

  const logoSetting = () => {
    if (storedTheme === "light") {
      setLogo(LogoLight);
    } else {
      setLogo(LogoDark);
    }
  };

  const GetNav = (width, props) => {
    if (window.location.pathname != "/login") {
      if (width < 1000) {
        return <MobileNav logo={logo} user={props.about} />;
      } else {
        return <NavBar logo={logo} user={props.about} />;
      }
    }
  };

  React.useEffect(() => {
    // props.actions.getLoginUser();
    logoSetting();
  }, []);

  return (
    <>
      {GetNav(window.innerWidth, props)}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bi/:nickname" element={<Profile />} />
        <Route path="/me/:nickname" element={<Profile />} />
        <Route path="" element={<Profile />} />
        <Route path="/direct" element={<Messages />} />
        <Route path="/direct:id" element={<Message />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <SettingModal
        userInfo={props.about}
        show={props.settingModal}
        onHide={() => {
          props.actions.settingModalShow(false);
        }}
      />

      <PostDetailModal
        show={props.postModal}
        onHide={() => {
          props.actions.postModalShow(false);
        }}
      />

      <AddPostModal
        show={props.addPostModal}
        onHide={() => {
          props.actions.addPostModal(false);
        }}
        about={props.about}
      />

      <FollowModal
        show={props.followModal}
        onHide={() => {
          props.actions.followModalShow(false);
        }}
      />
    </>
  );
}

function mapStateToProps(state) {
  return {
    about: state.loginReducer,
    settingModal: state.settingModalShow,
    postModal: state.postModalShow,
    addPostModal: state.addPostModal,
    followModal: state.followModalShow,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      settingModalShow: bindActionCreators(
        functionsAction.settingModalShow,
        dispatch
      ),
      postModalShow: bindActionCreators(
        functionsAction.postModalShow,
        dispatch
      ),
      followModalShow: bindActionCreators(
        functionsAction.followModalShow,
        dispatch
      ),
      addPostModal: bindActionCreators(functionsAction.addPostModal, dispatch),
      getLoginUser: bindActionCreators(loginActions.getLoginUser, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
