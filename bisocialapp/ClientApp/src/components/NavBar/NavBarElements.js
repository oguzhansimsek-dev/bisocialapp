import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Button, UncontrolledPopover } from "reactstrap";

import {
  Bars,
  Users,
  RegUser,
  OutlineHome,
  Bell,
  Search,
  OutlineMessage,
  OutlineAddBox,
} from "../root/Icons";

const iconSm = 1.3;
const iconMd = 1.5;
const iconLg = 1.5;
const iconWidthMobile = 30;

const textDark = "#000";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  position: fixed;
  width: 100%;
  height: 60px;
  padding: 0px 5vw;
  z-index: 10;

  @media screen and (max-width: 960px) {
    justify-content: center;
  }
`;
export const Logo = styled(Link)`
  display: flex;
  color: ${textDark};
  text-decoration: none;
  align-items: center;
  text-decoration: none;

  &:hover {
    color: red;
  }
`;

export const LogoImg = styled.img`
  width: 148px;
`;

export const MobileLogo = styled(Link)`
  display: flex;
  color: ${textDark};
  text-decoration: none;
  align-items: center;
  text-decoration: none;

  h1 {
    margin-bottom: 0px;
  }

  &:hover {
    color: red;
  }
`;
export const NavLink = styled(Link)`
  color: ${textDark};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.8rem 0.5rem;
  cursor: pointer;
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 900px) {
    padding: 0.8rem 0.75rem;

    &:hover {
      color: ${textDark};
    }
    &.active {
      color: ${textDark};
      border-bottom: 3.5px solid !important;

      &:hover {
        padding: 0.7rem 0.75rem !important;
      }
    }

    .msg-icon {
      padding-right: 0px;
      padding-left: 0px;
    }
  }

  &:hover {
    color: ${textDark};
  }
  &.active {
    color: ${textDark};
    border-bottom: 3.5px solid;

    &:hover {
      padding: 0.7rem 0.5rem;
    }
  }
`;

export const NavLinkMsg = styled(Link)`
  color: ${textDark};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.8rem 0.5rem;
  cursor: pointer;
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${textDark};
  }
  &.active {
    color: ${textDark};
  }
`;
export const BarsIcon = styled(Bars)`
  display: none;
  color: ${textDark};

  @media screen and (max-width: 768px) {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  justify-content: center;
  min-width: 250px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: ${textDark};
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    trasition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
export const OutlineHomeIcon = styled(OutlineHome)`
  font-size: ${iconLg}rem;
  width: 90px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 500px) {
    font-size: ${iconMd}rem;
    width: 55px;
  }

  @media screen and (max-width: 375px) {
    font-size: ${iconSm}
    width: ${iconWidthMobile}px;
  }
`;
export const BellIcon = styled(Bell)`
  font-size: ${iconLg}rem;
  width: 90px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 500px) {
    font-size: ${iconMd}rem;
    width: 55px;
  }

  @media screen and (max-width: 375px) {
    font-size: ${iconSm}
    width: ${iconWidthMobile}px;
  }
`;
export const SearchIcon = styled(Search)`
  font-size: ${iconLg}rem;
  width: 90px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 500px) {
    font-size: ${iconMd}rem;
    width: 55px;
  }

  @media screen and (max-width: 375px) {
    font-size: ${iconSm}
    width: ${iconWidthMobile}px;
  }
`;
export const UsersIcon = styled(Users)`
  font-size: ${iconLg}rem;
  width: 90px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 500px) {
    font-size: ${iconMd}rem;
    width: 55px;
  }

  @media screen and (max-width: 375px) {
    font-size: ${iconSm}
    width: ${iconWidthMobile}px;
  }
`;
export const RegUserIcon = styled(RegUser)`
  font-size: ${iconLg - 0.3}rem;
  width: 90px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 500px) {
    font-size: ${iconMd}rem;
    width: 55px;
  }

  @media screen and (max-width: 375px) {
    font-size: ${iconSm}
    width: ${iconWidthMobile}px;
  }
`;
export const OutlineMessageIcon = styled(OutlineMessage)`
  font-size: ${iconLg}rem;
  width: 90px;
  display: flex;
  justif-content: center;
  @media screen and (max-width: 500px) {
    font-size: ${iconMd}rem;
    width: 25px;
  }

  @media screen and (max-width: 375px) {
    font-size: ${iconSm}
    width: 25px;
  }
`;
export const OutlineAddBoxIcon = styled(OutlineAddBox)`
  font-size: ${iconLg}rem;
  width: 90px;
  display: flex;
  justif-content: center;
  @media screen and (max-width: 500px) {
    font-size: ${iconMd}rem;
    width: 55px;
  }

  @media screen and (max-width: 375px) {
    font-size: ${iconSm}
    width: ${iconWidthMobile}px;
  }
`;
export const ButtoN = styled(Button)`
  color: ${textDark} !important;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.8rem 0.75rem;
  cursor: pointer;
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;
  background-color: transparent;
  border: 0px;
  box-shadow: none !important;

  &:hover {
    background-color: transparent !important;
  }
  &:focus {
    background-color: transparent !important;
    border-bottom: 4px solid #000;
    color: ${textDark};
    border-bottom: 3.5px solid;

    &:hover {
      padding: 0.7rem 0.75rem;
    }
  }
`;

export const NotificationBar = styled(UncontrolledPopover)`
  .popover {
    position: fixed !important;
    max-width: 400px;
    min-width: 400px;
    max-height: 375px;
    overflow-y: scroll;
    left: 0px !important;
    transform: translate3d(808px, 59.375px, 0px) !important;
  }
  .popover-arrow {
    transform: translate3d(303.25px, 0px, 0px) !important;
  }
`;
