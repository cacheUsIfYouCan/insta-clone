import React, {Component} from 'react';

class Ellipsis extends Component {
    render() {
        return (
            <button className="ellipsis-btn" onClick={this.props.openMeatball}><i className="fa-solid fa-ellipsis"></i></button>
        )
    }
}

export default Ellipsis;