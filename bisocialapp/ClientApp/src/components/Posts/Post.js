import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as functionsAction from "../../redux/actions/functionsAction";
import { getPostByPostId } from "../../redux/actions/postActions";
import { Card, CardBody, CardFooter, Button } from "reactstrap";
import {
  UserThumbnail,
  PostHeader,
  PostUserName,
  PostTitle,
  PostText,
  PostButtons,
} from "../root/RootElements";
import { OutlineHeart, FillHeart, CommentIcon } from "../root/Icons";
import PostOptions from "./PostOptions";
import { Carousel } from "react-responsive-carousel";

const Post = (props) => {
  const profilePath = "/bi/";
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="mb-4">
      {/* Post şablonu */}
      <Card style={{ borderRadius: "8px", overflow: "hidden" }}>
        <PostHeader>
          {/* Kullanıcı küçük resmi */}
          <div className="d-flex align-items-center">
            <UserThumbnail
              className="mr-4"
              src={props.post.userPhoto}
            ></UserThumbnail>
            <Link
              to={profilePath + "eiqer"}
              className="text-decoration-none text-dark"
            >
              {/* Kullanıcı componenti */}
              <PostTitle className="mb-0" tag="h6">
                Oğuzhan Şimşek
              </PostTitle>
            </Link>
          </div>
          <PostOptions />
        </PostHeader>
        {/*<CardSubtitle className="mb-2 text-muted" tag="h6">Konum</CardSubtitle>  ----- POST IMAGES */}

        {props.post.pType === 1 ? (
          <Carousel autoPlay={false} showThumbs={false} swipeable={true}>
            {props.post.photos == null
              ? ""
              : props.post.photos.map((photo) => {
                  return (
                    <div key={photo.phId}>
                      {photo.phUrl != null && photo.phUrl != "" ? (
                        <img src={photo.phUrl} alt="resim" />
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
          </Carousel>
        ) : (
          ""
        )}

        {/*showPostPhotos(props.post.photos)*/}
        <CardBody>
          <PostText>
            <Link
              to={profilePath + "eiqer"}
              className="text-decoration-none text-dark"
            >
              <PostUserName>Oğuzhan Şimşek</PostUserName>
            </Link>
            {props.post.pText}
          </PostText>
          <PostButtons>
            <Button
              onClick={() => {
                isLiked === false ? setIsLiked(true) : setIsLiked(false);
              }}
              className="p-0 bg-transparent border-0 mr-2 box-shadow-none"
            >
              {isLiked === true ? (
                <FillHeart></FillHeart>
              ) : (
                <OutlineHeart></OutlineHeart>
              )}
            </Button>
            <Button
              onClick={() => {
                props.actions.postModalShow(true);
                props.actions.getPostDetail(props.post.pId);
                //console.log(props.post.pId);
              }}
              className="p-0 text-dark bg-transparent mr-2 border-0 box-shadow-none"
            >
              <CommentIcon></CommentIcon>
            </Button>
            <PostText>
              {props.post.likes != null
                ? props.post.likes.length + " " + "kişi beğendi."
                : "ilk beğenen sen ol."}
            </PostText>
          </PostButtons>
        </CardBody>
        <CardFooter>Yorum Alanı</CardFooter>
      </Card>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    postModal: state.postModalShow,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      postModalShow: bindActionCreators(
        functionsAction.postModalShow,
        dispatch
      ),
      getPostDetail: bindActionCreators(getPostByPostId, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
