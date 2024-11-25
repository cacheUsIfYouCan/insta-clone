import React, {Component} from 'react';
import "./meatball.css"

class MeatballMenu extends Component {
    render() {
        return (
            <div className={`meatball ${this.props.isMeatballOpen ? 'show-meatball' : ''}`}>
                <div className="closeMeatball"><button onClick={this.props.closeMeatball}><i class="fa-solid fa-angle-down"></i></button></div>
                <div className="block one"><p><i className={this.props.saved ? 'fas fa-bookmark' : 'far fa-bookmark'}></i> Saved</p></div>
                <div className="block two"><p><i className="fas fa-qrcode"></i> QR Code</p></div>
                <div className="block three"><p><i className="far fa-paper-plane"></i>We've moved things around</p></div>
                <div className="block four">
                    <p><i className="fa-regular fa-star"></i> Add to favorites</p>
                    <div><p><i className="fas fa-user-minus"></i>Unfollow</p></div>
                </div>
                <div className="block five">
                    <div><p><i className="fa-regular fa-circle-user"></i> About this account</p></div>
                    <div><p><i className="fa-solid fa-language"></i>Translation</p></div>
                    <div><p><i className="fa-regular fa-closed-captioning"></i>Closed captions</p></div>
                    <div><p><i className="fa-solid fa-circle-info"></i> Why you're seeing this post</p></div>
                    <div><p><i className="fa-solid fa-triangle-exclamation"></i> Report</p></div>
                </div>
            </div>
        )
    }
}

export default MeatballMenu;