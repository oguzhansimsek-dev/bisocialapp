import React, { useEffect } from "react";
import Post from "./Post";

const Posts = (props) => {
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
      {console.log(props.posts)}
    </>
  );
};

export default Posts;
