// Task 3: Import the necessary component modules and/or libraries using the variables referenced below.

import React, {Component} from 'react';
import PostActions from "./PostActions";
import FollowButton from './FollowButton'
import VerifiedBadge from './VerifiedBadge'
// import CommentSection from './CommentSection';

class InstagramPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
           // Task 4: Declare local state keys and assign them the value correlating to the props parameter of the constructor. For example, potato: props.potato
           liked: props.liked,
           saved: props.saved,
           totalLikes: props.totalLikes,
           caption: props.caption,
           userName: props.userName,
           postImgURL: props.postImgURL,
           userImgURL: props.userImgURL,
           comments: props.comments,
           shares: props.shares,
           newComment: '',
           totalComments: props.totalComments
        };
    }

    toggleLike = () => {
        this.setState(
            (prevState) => ({ liked: !prevState.liked }),
            this.adjustLikes
        );
    };    

    adjustLikes = () => {
        this.setState((prevState) => ({
            totalLikes: this.state.liked ? prevState.totalLikes + 1 : prevState.totalLikes - 1
        }));
    };
    

    toggleSave = () => {
        this.setState((prevState) => ({ saved: !prevState.saved }));
    };

    handleCommentChange = (event) => {
        this.setState({ newComment: event.target.value });
    };

    handleAddComment = () => {
        this.setState((prevState) => ({
            comments: [...prevState.comments, prevState.newComment],
            newComment: ''
        }));
    };

    expandCaption = () => {
        this.setState({ isCaptionExpanded: true });
    };

    renderCaption = () => {
        const { caption, userName, isCaptionExpanded } = this.state;
        const CHARACTER_LIMIT = 50;
        const shouldTruncate = caption.length > CHARACTER_LIMIT && !isCaptionExpanded;
    
        if (shouldTruncate) {
            return (
                <p className="caption-text">
                    <strong>{userName}</strong>{" "}
                    {caption.slice(0, CHARACTER_LIMIT)}...{" "}
                    <button 
                        onClick={this.expandCaption}
                        className="more-button"
                    >
                        more
                    </button>
                </p>
            );
        }
    
        return (
            <p className="caption-text">
                <strong>{userName}</strong>{" "}
                {caption}
            </p>
        );
    };

    render() {
        return (
            <div className="post">
                <div className="post-header">
                    <img src={`./images/user/${this.state.userImgURL}`} alt="User Profile" className="profile-pic" />
                    {/* Task 5: Make the <h2> below dynamically reference the dummy user name. */}
                    <h2>{this.state.userName}</h2>
                    <VerifiedBadge />
                    <FollowButton />
                </div>
                {/* Task 6: For the element below, pattern match the src value referencing the user profile image src above. Refer to the insta.css file and also add the appropriate class name */}
                <img src={`./images/post/${this.state.postImgURL}`} alt="Post Image" className="post-image"/>
                <div className="post-actions">
                    <PostActions 
                        totalLikes={this.state.totalLikes} 
                        liked={this.state.liked}
                        saved={this.state.saved}
                        totalComments={this.state.totalComments}
                        shares={this.state.shares}
                        // Task 7: Pass down the appropriate handler callback functions the child component will need to invoke when/if things are clicked.
                        onLike={this.toggleLike}
                        toggleSave={this.toggleSave}
                    /> 
                </div>
                <div className="post-caption">
                    {/* Task 8: Make the <p> element below dynamically reference the post information. */}
                    {this.renderCaption()}
                </div>
                {/* Commented out entire Comment Section on the main post (Tickets  #15 & #13*/}
                {/* <div className="comments-section">
                    <CommentSection
                        // Task 9: Pass down the necessary data and handlers used by the CommentSection component
                        comments={this.state.comments}
                        newComment={this.state.newComment}
                        handleCommentChange={this.handleCommentChange}
                        handleAddComment={this.handleAddComment}
                    />
                </div> */}
            </div>
        );
    }
}


export default InstagramPost;
