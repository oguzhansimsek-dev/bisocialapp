import React, { useEffect, useState } from "react";
import { Card, CardFooter, CardText } from "reactstrap";
import { ProfilePhoto, PostUserName, PostText } from "../root/RootElements";
import {
  UserInfoBody,
  LogOutIcon,
  LogOutButton,
  OutlineSettingIcon,
  OutlineSettingButton,
  UserAddLineIcon,
  UserAddLineButton,
  UserFollowLineIcon,
  UserUnfollowLineIcon,
  FollowersBtn,
} from "./ProfileElements";

import ThemeSelector from "../root/ThemeSelector";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as functionsAction from "../../redux/actions/functionsAction";

const AboutMe = (props) => {
  const [isFollow, setIsFollow] = useState(true);

  function followUser() {
    if (isFollow) {
      setIsFollow(false);
    } else {
      setIsFollow(true);
    }
  }

  return (
    // TODO 300x400
    <>
      <Card
        className="mb-4 br-8"
        style={{
          overflow: "hidden",
          width: props.width,
          height: props.height,
        }}
      >
        <UserInfoBody>
          <UserAddLineButton
            onClick={() => {
              followUser();
            }}
          >
            {isFollow ? (
              <UserAddLineIcon className="theme-icons-color" />
            ) : (
              <UserFollowLineIcon className="theme-icons-color" />
            )}
          </UserAddLineButton>

          <ProfilePhoto src={props.user.ppUrl} />
          <PostUserName style={{ fontSize: "17px" }}>
            {props.user.firstname} {props.user.lastname}
          </PostUserName>
          <PostUserName style={{ fontSize: "14px", marginBottom: "10px" }}>
            @{props.user.nickname}
          </PostUserName>
          <PostText>{props.user.biography}</PostText>
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
              fontWeight: "600",
            }}
          >
            <FollowersBtn
              onClick={() => {
                props.actions.followModalShow(true);
              }}
            >
              340 Takip
            </FollowersBtn>
            <FollowersBtn
              onClick={() => {
                props.actions.followModalShow(true);
              }}
            >
              339 Takipçi
            </FollowersBtn>
          </div>
        </UserInfoBody>
        <CardFooter className="d-flex justify-content-between">
          <OutlineSettingButton
            onClick={() => {
              props.actions.settingModalShow(true);
            }}
          >
            <OutlineSettingIcon className="theme-icons-color" />
          </OutlineSettingButton>
          <ThemeSelector />
          <LogOutButton>
            <LogOutIcon className="theme-icons-color" />
          </LogOutButton>
        </CardFooter>
      </Card>
    </>
  );
};

function mapStateToProps(state) {
  return {
    modalShow: state.settingModalShow,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      settingModalShow: bindActionCreators(
        functionsAction.settingModalShow,
        dispatch
      ),
      followModalShow: bindActionCreators(
        functionsAction.followModalShow,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);
