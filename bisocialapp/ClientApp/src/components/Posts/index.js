import React, { useEffect } from "react";
import Post from "./Post";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as postActions from "../../redux/actions/postActions";

const Posts = (props) => {
  const getPosts = () => {
    props.actions.getPosts();
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {props.posts.map((post) => {
        return (
          <Post
            className={window.innerHeight < 1000 ? "mb-4" : ""}
            key={"post_" + post.pId}
            post={post}
          ></Post>
        );
      })}
    </>
  );
};

function mapStateToProps(state) {
  return {
    posts: state.postListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPosts: bindActionCreators(postActions.getPosts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
