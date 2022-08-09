import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { UserThumbnail, PostUserName as UserName } from "./root/RootElements";

const FriendList = (props) => {
  const customA = {
    color: "#000",
    textDecoration: "none",
  };

  return (
    <div
      className="p-3 br-8"
      style={{
        backgroundColor: "var(--palette-background-card)",
      }}
    >
      <h6>Arkadaşlar</h6>

      <ListGroup
        style={{
          maxHeight: "255px",
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        {props.friendList.map((user) => {
          return (
            <Link style={customA} to={"bi/" + user.username} key={user.userId}>
              <ListGroupItem
                className="px-0"
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <UserThumbnail src={user.userImg}></UserThumbnail>
                <UserName>
                  {user.firstname} {user.lastname}
                </UserName>
              </ListGroupItem>
            </Link>
          );
        })}
      </ListGroup>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    friendList: state.friendListReducer,
  };
}

export default connect(mapStateToProps)(FriendList);
