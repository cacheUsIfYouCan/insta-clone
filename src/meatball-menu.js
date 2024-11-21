import React, {Component} from 'react';
import "./meatball.css"

class MeatballMenu extends Component {
    render() {
        return (
            <div className="meatball container">
                <div className="block one"><p>Saved</p></div>
                <div className="block two"><p>QR Code</p></div>
                <div className="block three"><p>We're moving things around.</p></div>
                <div className="block four">
                    <div><p>Add to favorites</p></div>
                    <div><p>Unfollow</p></div>
                </div>
                <div className="block five">
                    <div><p>About this account</p></div>
                    <div><p>Translation</p></div>
                    <div><p>Closed captions</p></div>
                    <div><p>Why you're seeing this post</p></div>
                    <div><p>Report</p></div>
                </div>
            </div>
        )
    }
}

export default MeatballMenu;