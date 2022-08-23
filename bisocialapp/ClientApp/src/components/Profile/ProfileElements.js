import {
  LogOut,
  OutlineSetting,
  UserAddLine,
  UserFollowLine,
  UserUnfollowLine,
} from "../root/Icons";
import styled from "styled-components";
import {
  Button,
  CardBody,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

import "../../style/_colors.scss";

const textDark = "#000";
const success = "#00a400";
let i = 0;

export const UserInfoBody = styled(CardBody)`
  background-color: #fff;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  &:hover .ProfilePhoto {
    border: 5px solid ${success};
  }
`;

export const LogOutIcon = styled(LogOut)`
  color: ${textDark};
  width: 25px;
  height: 25px;
`;
export const LogOutButton = styled(Button)`
  background-color: transparent !important;
  border: 0px;
  box-shadow: none !important;
`;

export const OutlineSettingIcon = styled(OutlineSetting)`
  width: 25px;
  height: 25px;

  &:hover {
    animation: next-spin 1s;
    ${(i = i + 1)}
  }
  animation: prev-spin ${i}s;
`;

export const OutlineSettingButton = styled(Button)`
  background-color: transparent !important;
  border: 0px;
  box-shadow: none !important;
`;

export const UserAddLineIcon = styled(UserAddLine)`
  width: 25px;
  height: 25px;
`;

export const UserAddLineButton = styled(Button)`
  position: absolute;
  padding: 8px;
  right: 10px;
  background-color: transparent !important;
  border: 0px;
  box-shadow: none !important;
`;
export const UserFollowLineIcon = styled(UserFollowLine)`
  width: 25px;
  height: 25px;
`;
export const UserUnfollowLineIcon = styled(UserUnfollowLine)`
  width: 25px;
  height: 25px;
`;

export const FollowBtn = styled(Button)`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100px;
  right: 20px;
  padding: 0px;
  font-size: 13px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  box-shadow: none !important;

  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
  }
`;

export const FollowersBtn = styled(CardText)`
  font-size: 14px;
  cursor: pointer;
`;

export const FollowUsers = styled(ListGroup)`
  max-height: 250px;
  overflow: hidden scroll;
`;
export const FollowUserItem = styled(ListGroupItem)`
  color: var(--palette-text-primary) !important;
  background-color: transparent !important;
  display: flex;
  align-items: center;
  padding: 10px;
`;
