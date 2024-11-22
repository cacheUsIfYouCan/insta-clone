import React, {Component} from 'react' 

// Refer to the module pattern we reviewed several times in class today and debug the error of this component.

class PostActions extends Component {
    
    render() {

        let formattedLikes;
        let formattedComments;
        let formattedShares;
        // Adjust formatting for totalLikes
        if (this.props.totalLikes == 0){
            formattedLikes = null;
        } else if (this.props.totalLikes <= 9999) {
            formattedLikes = this.props.totalLikes;
        } else if (this.props.totalLikes > 9999 && this.props.totalLikes <= 99999) {
            let sliceLikes = (this.props.totalLikes/1000).toString().slice(0, 4);
            if (sliceLikes[3] == '0') {
                sliceLikes = sliceLikes.slice(0, 2);
            }
            formattedLikes = `${sliceLikes}K`;
        } else if (this.props.totalLikes > 99999 && this.props.totalLikes <= 999999) {
            let sliceLikes = (this.props.totalLikes/1000).toString().slice(0, 3);
            formattedLikes = `${sliceLikes}K`;
        } else if (this.props.totalLikes > 999999) {
            let sliceLikes = (this.props.totalLikes/1000000).toString().slice(0,3);
            formattedLikes = `${sliceLikes}M`;
        }

        // Adjust formatting for totalComments
        if (this.props.totalComments == 0){
            formattedComments = null;
        } else if (this.props.totalComments <= 9999) {
            formattedComments = this.props.totalComments;
        } else if (this.props.totalComments > 9999 && this.props.totalComments <= 99999) {
            let sliceComments = (this.props.totalComments/1000).toString().slice(0, 4);
            if (sliceComments[3] == '0') {
                sliceComments = sliceComments.slice(0, 2);
            }
            formattedComments = `${sliceComments}K`;
        } else if (this.props.totalComments > 99999 && this.props.totalComments <= 999999) {
            let sliceComments = (this.props.totalComments/1000).toString().slice(0, 3);
            formattedComments = `${sliceComments}K`;
        } else if (this.props.totalComments > 999999) {
            let sliceComments = (this.props.totalComments/1000000).toString().slice(0,3);
            formattedComments = `${sliceComments}M`;
        }

        // Adjust formatting for shares
        if (this.props.shares == 0){
            formattedShares = null;
        } else if (this.props.shares <= 9999) {
            formattedShares = this.props.shares;
        } else if (this.props.shares > 9999 && this.props.shares <= 99999) {
            let sliceShares = (this.props.shares/1000).toString().slice(0, 4);
            if (sliceShares[3] == '0') {
                sliceShares = sliceShares.slice(0, 2);
            }
            formattedShares = `${sliceShares}K`;
        } else if (this.props.shares > 99999 && this.props.shares <= 999999) {
            let sliceShares = (this.props.shares/1000).toString().slice(0, 3);
            formattedShares = `${sliceShares}K`;
        } else if (this.props.shares > 999999) {
            let sliceShares = (this.props.shares/1000000).toString().slice(0,3);
            formattedShares = `${sliceShares}M`;
        }
        

        return (
        <>
            <button onClick={this.props.onLike} className={this.props.liked ? "liked" : "like-button"}>
                <i className={this.props.liked ? 'fas fa-heart' : 'far fa-heart'}></i>
            </button>
            <p>{formattedLikes}</p>
            <button className="comment-button">
                <i className="far fa-comment"></i>
            </button>
            <p>{formattedComments}</p>
            <button className="share-button">
                <i className="far fa-paper-plane"></i>
            </button>
            <p>{formattedShares}</p>
            <button onClick={this.props.toggleSave} className="save-button">
                <i className={this.props.saved ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>
            </button>
        </>   
        );
    }
}

export default PostActions;


