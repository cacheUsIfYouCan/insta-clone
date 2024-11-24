import React, { useState } from 'react';
import './FollowButton.css';

const FollowButton = ({ following, onFollowToggle }) => {
  return (
    <button 
      className={`follow-button ${following ? 'following' : ''}`}
      onClick={onFollowToggle}
    >
      {following ? 'Following' : 'Follow'}
    </button>
  );
};

export default FollowButton;