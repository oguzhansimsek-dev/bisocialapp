import styled from "styled-components";
import {
  CardHeader,
  CardText,
  CardTitle,
  Input,
  CardBody,
  Col,
} from "reactstrap";

const success = "#00a400";

const postTextSize = 14;
const thumbSize = 33;
const profilePhotoSize = 120;

export const UserThumbnail = styled.img`
  object-fit: cover;
  object-position: center;
  width: ${thumbSize}px;
  height: ${thumbSize}px;
  border-radius: 50%;
  margin-right: 11px;
`;

export const PostHeader = styled(CardHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px;
`;

export const PostTitle = styled(CardTitle)`
  font-size: ${postTextSize}px;
  font-weight: 600;
`;

export const PostText = styled(CardText)`
  font-size: ${postTextSize}px;
`;

export const PostUserName = styled.span`
  font-weight: 600;
  font-size: ${postTextSize}px;
  margin-right: 5px;
`;

export const PostButtons = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const CoverPhoto = styled.img`
  width: 100%;
`;

export const ProfilePhoto = styled.img`
  width: ${profilePhotoSize}px;
  height: ${profilePhotoSize}px;
  border: 5px solid transparent;
  box-sizing: border-box;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  user-select: none;
  margin-bottom: 10px;
  transition. all 0.5s ease-in-out;
  &:hover {
    border: 5px solid ${success};
  }
`;

export const WhatDoUThink = styled.div`
  background-color: #cecece6b;
  border-radius: 20px;
  width: 100%;
  padding: 8px 15px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #e9e9e9;
  }
`;

export const AddPostButton = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
`;

export const RightSideBar = styled.div`
  position: fixed;
  width: 215px;

  @media screen and (min-width: 1200px) {
    width: 265px;
  }
  @media screen and (min-width: 1400px) {
    width: 300px !important;
  }
`;
