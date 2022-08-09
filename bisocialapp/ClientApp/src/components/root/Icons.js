import styled from "styled-components";

import {
  FaRegComment,
  FaBars,
  FaUsers,
  FaRegUser,
  FaPhotoVideo,
} from "react-icons/fa";
import {
  AiOutlineMessage,
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { BiBell, BiSearch, BiLockOpenAlt } from "react-icons/bi";
import { MdOutlineAddBox } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import { FiLogOut } from "react-icons/fi";
import {
  RiUserAddLine,
  RiUserFollowLine,
  RiUserUnfollowLine,
} from "react-icons/ri";
import { BsEmojiLaughing } from "react-icons/bs";

const hoverBtnOpacity = "0.7";
const btnSize = 25;

export const OutlineHeart = styled(AiOutlineHeart)`
  font-size: ${btnSize}px;
  transition: all 0.2s ease-in-out;
  fill: var(--palette-text-primary);

  &:hover {
    opacity: ${hoverBtnOpacity};
  }
  &.active {
    path {
      fill: red;
    }
  }
`;

export const CommentIcon = styled(FaRegComment)`
  font-size: ${btnSize - 3}px;
  transition: all 0.2s ease-in-out;
  fill: var(--palette-text-primary);
  tre &:hover {
    opacity: 0.7;
  }
`;
export const ArrowSortedDown = styled(TiArrowSortedDown)``;
export const OutlineAddBox = styled(MdOutlineAddBox)``;
export const OutlineMessage = styled(AiOutlineMessage)``;
export const Search = styled(BiSearch)``;
export const Bell = styled(BiBell)``;
export const OutlineHome = styled(AiOutlineHome)``;
export const RegUser = styled(FaRegUser)``;
export const Bars = styled(FaBars)``;
export const Users = styled(FaUsers)``;
export const LogOut = styled(FiLogOut)``;
export const OutlineSetting = styled(AiOutlineSetting)``;
export const UserAddLine = styled(RiUserAddLine)``;
export const UserFollowLine = styled(RiUserFollowLine)``;
export const UserUnfollowLine = styled(RiUserUnfollowLine)``;
export const LockOpenAltIcon = styled(BiLockOpenAlt)`
  width: 30px;
  font-size: 1.4rem;
`;
export const PhotoVideoIcon = styled(FaPhotoVideo)`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  color: #ff0000;
`;
export const EmojiLaughingIcon = styled(BsEmojiLaughing)`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  color: orange;
`;

/************************************************************************************************ */

export const FillHeart = styled(AiFillHeart)`
  font-size: ${btnSize}px;
  transition: all 0.2s ease-in-out;
  fill: red;
  animation-name: likeBtnColor;
  animation-duration: 0.8s;

  &:hover {
    opacity: ${hoverBtnOpacity};
  }
`;
