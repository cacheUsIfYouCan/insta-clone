import React from "react";
import "./insta.css";
import posts from "./demopost.json";
import Post from "./InstagramPost"
// Task 1: Import the necessary modules here and assign them to the appropriate variables used below. Remember that JSON files are also treated like modules.

function App() {

  return (
    <div className="app">
      {posts.map((post, index) => (
        <Post 
          // Task 2: Pass down the data of each JSON object to this child component.
          key = {index}
          liked = {post.liked}
          saved = {post.saved}
          totalLikes = {post.totalLikes}
          caption = {post.caption}
          userName = {post.userName}
          postImgURL = {post.postImgURL}
          userImgURL = {post.userImgURL}
          comments = {post.comments}
          shares = {post.shares}
          totalComments = {post.totalComments}
          isVerified = {post.isVerified}
          // question here: why don't we use a semicolon to end each line?
        />
      ))}
    </div>
  );
}

export default App;
