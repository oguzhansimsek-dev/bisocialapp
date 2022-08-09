import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Modal } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./posts.scss";

function PostOptions() {
  const [options, setOptions] = useState(false);

  return (
    <div>
      <IconButton
        onClick={() => {
          setOptions(true);
        }}
        aria-label="more"
        id="long-button"
        aria-haspopup="true"
      >
        <MoreVertIcon />
      </IconButton>
      <Modal
        show={options}
        onHide={() => {
          setOptions(false);
        }}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ListGroup className="options">
          <ListGroupItem className="option-item text-danger fw-600">
            Şikayet Et
          </ListGroupItem>
          <ListGroupItem className="option-item text-danger fw-600">
            Takibi Bırak
          </ListGroupItem>
          <ListGroupItem className="option-item">Gönderiye Git</ListGroupItem>
          <ListGroupItem className="option-item">
            Bağlantıyı Kopyala
          </ListGroupItem>
          <ListGroupItem
            className="option-item"
            onClick={() => {
              setOptions(false);
            }}
          >
            İptal
          </ListGroupItem>
        </ListGroup>
      </Modal>
    </div>
  );
}

export default PostOptions;
