import React, { useState } from "react";
import "./insta.css";
import posts from "./demopost.json";
import Post from "./InstagramPost"
// Task 1: Import the necessary modules here and assign them to the appropriate variables used below. Remember that JSON files are also treated like modules.

function App() {

  const initialFollowingState = {};
  
  // Loop through posts and set up who we're following
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    // If we haven't set this username in our object yet
    if (!initialFollowingState[post.userName]) {
      // Add the username and their following status
      initialFollowingState[post.userName] = post.following;
    }
  }

  const [followingUsers, setFollowingUsers] = useState(initialFollowingState);

  // Simpler toggle function
  const handleFollowToggle = (userName) => {
    setFollowingUsers((previousState) => {
      // Make a copy of the previous state
      const newState = { ...previousState };
      // Flip the following status for this user
      newState[userName] = !newState[userName];
      return newState;
    });
  };

  return (
    <div className="app">
      {posts.map((post, index) => (
        <Post 
          // Task 2: Pass down the data of each JSON object to this child component.
          key = {index}
          following = {post.following}
          location = {post.location}
          shares = {post.shares}
          totalComments = {post.totalComments}
          liked = {post.liked}
          saved = {post.saved}
          totalLikes = {post.totalLikes}
          caption = {post.caption}
          userName = {post.userName}
          postImgURL = {post.postImgURL}
          userImgURL = {post.userImgURL}
          isUser = {post.isUser}
          isVerified = {post.isVerified}
          timestamp = {post.timestamp}
          comments = {post.comments}
          commentLikes = {post.commentLikes}
          totalComments = {post.totalComments}
          commentUsers = {post.commentUsers}
          commentImgURL = {post.commentImgURL}
          isVerified = {post.isVerified}
          isUser={post.isUser}
          following={followingUsers[post.userName] || false}
          onFollowToggle={() => handleFollowToggle(post.userName)}
          // question here: why don't we use a semicolon to end each line?
        />
      ))}
    </div>
  );
}

export default App;
