import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as functionsAction from "../../redux/actions/functionsAction";

import { Modal } from "react-bootstrap";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
//* Icons
import { RegUserIcon } from "../NavBar/NavBarElements";
import { LockOpenAltIcon, OutlineSetting } from "../root/Icons";

import "./settingModal.scss";
//* Components
import UserInfo from "./UserInfo";

const SettingModal = (props) => {
  const [selectedItem, setSelectedItem] = useState(1);

  const selectMenuItem = (menuItem) => {
    setSelectedItem(menuItem);
  };

  const getIcons = (iconId) => {
    switch (iconId) {
      case 1:
        return <RegUserIcon style={{ width: "30px" }} />;
      case 2:
        return <LockOpenAltIcon style={{ width: "30px;" }} />;
      case 3:
        return <OutlineSetting style={{ width: "30px", fontSize: "1.3rem" }} />;
      default:
        return "";
    }
  };

  const getSettingPage = (pageId) => {
    switch (pageId) {
      case 1:
        return <UserInfo userInfo={props.userInfo} />;
      case 2:
        return "GİZLİLİK VE GÜVENLİK";
      case 3:
        return "UYGULAMA AYARLARI";
      default:
        return "";
    }
  };
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>Ayarlarım</Modal.Header>
        <Modal.Body style={{ minHeight: "500px" }}>
          <Container>
            <Row>
              <Col sm="12" md="4" lg="4" xl="4">
                <ListGroup className="sidebar-menu">
                  {props.menuItems.map((item) => {
                    return (
                      <ListGroupItem
                        active={item.itemId === selectedItem ? true : false}
                        onClick={() => {
                          selectMenuItem(item.itemId);
                        }}
                        key={item.itemId}
                        className="menu-item"
                      >
                        {getIcons(item.itemId)}
                        {item.itemName}
                      </ListGroupItem>
                    );
                  })}
                </ListGroup>
              </Col>
              <Col sm="12" md="8" lg="8" xl="8">
                {/* Ayarlar Sağ Bölüm (Seçeneğe göre değişecek olan alan.) */}
                {getSettingPage(selectedItem)}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center"></Modal.Footer>
      </Modal>
      {/** console.log(props.menuItems) */}
    </>
  );
};

function mapStateToProps(state) {
  return {
    menuItems: state.selectMenuItem,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      selectMenuItem: bindActionCreators(
        functionsAction.selectMenuItem,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingModal);
