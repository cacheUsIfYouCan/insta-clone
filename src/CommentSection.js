import React, {Component} from 'react'
import './comments.css'

class CommentSection extends Component {

    render() {
        return (
        <div className={`comments-drawer ${this.props.isCommentsOpen ? 'show-comments' : ''}`}>
            <div className="close-comments"><button className="close-button" onClick={this.props.closeComments}></button></div>
            <div className="comment-header">
                <div className="comments-text">
                    <p>Comments</p>
                </div>
                <div className="comments-share">
                    <button className="share-button">
                        <i className="far fa-paper-plane"></i>
                    </button>
                </div>
            </div>
            <div className="comments-section">
                {/* {this.props.comments.map((comment, index) => (
                    <p key={index}>{comment}</p>
                ))} */}
            </div>
            <div className="add-comment">
                <img src='./images/user/morgan-profile.png' alt="User Profile" className="profile-pic"></img>
                <input
                    type="text"
                    placeholder="Add a comment..."
                    value={this.props.newComment}
                    onChange={this.props.handleCommentChange}
                />
                <button onClick={this.props.handleAddComment}>Post</button>
            </div>
        </div>
        );
    }
}

export default CommentSection;
