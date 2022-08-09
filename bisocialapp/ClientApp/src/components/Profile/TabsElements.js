import styled from "styled-components";
import { Button } from "reactstrap";

import "../../style/_colors.scss";

export const ButtonArea = styled.div`
  border-bottom: 1px solid black;
`;
export const TabButton = styled(Button)`
  width: 175px;
  margin-bottom: -1px;
  border: 1px;
  box-shadow: none !important;
  background-color: transparent !important;

  &:hover {
    background-color: transparent;
    color: black;
  }
  &.active {
    color: black;
    border-bottom-color: #e9e9e9 !important;
    border-radius: 5px 5px 0px 0px !important;
    background-color: var(--palette-background-menuitem) !important;
  }
`;

export const TabContent = styled.div``;
