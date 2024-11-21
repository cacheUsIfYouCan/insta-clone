import React, { useState } from 'react';
import './FollowButton.css';

const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <button 
      className={`follow-button ${isFollowing ? 'following' : ''}`}
      onClick={handleClick}
    >
      {isFollowing ? 'Following' : 'Follow'}
    </button>
  );
};

export default FollowButton;