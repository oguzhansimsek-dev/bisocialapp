//! KULLANILMIYOR

import React from "react";
import { CoverPhoto, ProfilePhoto } from "../root/RootElements";

const ProfileTop = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", position: "relative" }}
    >
      <CoverPhoto src="https://scontent.fesb4-2.fna.fbcdn.net/v/t39.30808-6/273777789_10224291463985664_632545555848005984_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_ohc=xiXyyfmyLgcAX9gkVGg&_nc_ht=scontent.fesb4-2.fna&oh=00_AT9cwpFhu6y7r4hPbHfJB2-U2WHrMdpgUUfxPmHnOmR29w&oe=622F3B07" />
      <ProfilePhoto src="https://scontent.fesb3-2.fna.fbcdn.net/v/t39.30808-1/271759736_10224134597784107_6756898134781887319_n.jpg?stp=dst-jpg_p480x480&_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=_TgmpVpyfj0AX8MHxq0&_nc_ht=scontent.fesb3-2.fna&oh=00_AT_SKtcfsL_ITV2YCi2btBoYkp4KIU8YtfLOsIVeNQSKiw&oe=6230FAA9" />
    </div>
  );
};

export default ProfileTop;
