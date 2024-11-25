import React, {Component} from 'react'
import './insta.css'
import './comments.css'


class CommentSection extends Component {

    render() {
        return (
        <>
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
                {this.props.commentImgURL.map((userImg, index) => (
                    <img key ={index} src={`./images/user/${userImg}`} alt="Commenter user profile" className="user-pic"></img>
                ))}
                {this.props.commentUsers.map((user, index) => (
                    <p key={index} className="username">{user}</p>
                ))}
                {this.props.comments.map((comment, index) => (
                    <p key={index} className="commentText">{comment}</p>
                ))}
                {this.props.commentLikes.map((likes, index) => (
                    <div className="commentLikes">
                        <button className='like-button'>
                        <i className='far fa-heart'></i>
                        </button>
                        <p key={index} className="likes">{likes}</p>
                    </div>
                ))}
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
        <div className={`${this.props.isCommentsOpen ? 'comments-drawer-overlay' : ''}`}></div>
        </>
        );
    }
}

export default CommentSection;
