import React from "react";
import "./ShareDrawer.css";

class ShareDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      suggestedUsers: [
        {
          id: "1",
          name: "Beyoncé",
          username: "honeyhive",
          image: "/images/user/bey.jpeg",
          online: true
        },
        {
          id: "2",
          name: "Bill Nye",
          username: "thee-science-guy",
          image: "/images/user/bill.jpeg",
          online: false
        },
        {
          id: "3",
          name: "Betty White",
          username: "goldencharm",
          image: "/images/user/betty.jpeg",
          online: true
        },
        {
          id: "4",
          name: "Christina Aguilera",
          username: "ChristmasCrunch",
          image: "/images/user/christina.jpeg",
          online: false
        },
        {
          id: "5",
          name: "Chris Hemsworth",
          username: "captain-him",
          image: "/images/user/chris.jpeg",
          online: true
        },
        {
          id: "6",
          name: "Dwayne Johnson",
          username: "rock-n-hard-place",
          image: "/images/user/dwayne.jpeg",
          online: true
        },
        {
          id: "7",
          name: "Morris Day",
          username: "midnightflair217",
          image: "/images/user/morris.jpeg",
          online: false
        },
        {
          id: "8",
          name: "Angelina Jolie",
          username: "queenmother",
          image: "/images/user/angie.jpeg",
          online: true
        },
      ],
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleCopyLink = () => {
    console.log("Copying link...");
  };

  handleShareTo = () => {
    console.log("Opening share to...");
  };

  handleMessages = () => {
    console.log("Opening messages...");
  };

  handleWhatsApp = () => {
    console.log("Opening WhatsApp...");
  };

  render() {
    const filteredUsers = this.state.suggestedUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ||
        user.username.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );

    if (!this.props.isOpen) return null;

    return (
      <div className="share-drawer-overlay" onClick={this.props.onClose}>
        <div className="share-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="handle-bar">
            <div className="handle"></div>
          </div>

          <div className="search-container">
            <div className="search-wrapper">
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                placeholder="Search"
                value={this.state.searchQuery}
                onChange={this.handleSearchChange}
                className="search-input"
              />
              <button className="add-people-button">
                <i className="fas fa-user-plus"></i>
              </button>
            </div>
          </div>

          <div className="users-grid-container">
            <div className="users-grid">
              {filteredUsers.map((user) => (
                <div key={user.id} className="user-item">
                  <div className="avatar-container">
                    <img src={user.image} alt={user.name} className="user-avatar" />
                    {user.online && <div className="online-indicator"></div>}
                  </div>
                  <div className="user-name">{user.name.split(' ')[0]}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bottom-actions">
            <button className="action-button add-note">
              <i className="fas fa-plus"></i>
              <span>Add note</span>
            </button>
            <button className="action-button" onClick={this.handleCopyLink}>
              <i className="fas fa-link"></i>
              <span>Copy link</span>
            </button>
            <button className="action-button" onClick={this.handleShareTo}>
              <i className="fas fa-share"></i>
              <span>Share to...</span>
            </button>
            <button className="action-button" onClick={this.handleMessages}>
              <i className="far fa-comment"></i>
              <span>Messages</span>
            </button>
            <button className="action-button" onClick={this.handleWhatsApp}>
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShareDrawer;
