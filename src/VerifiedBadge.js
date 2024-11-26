import React from 'react'

class VerifiedBadge extends React.Component {
  render() {
    return (
      <i 
        className="fa fa-check-circle" 
        style={{
          color: '#0095F6',
          marginLeft: '4px',
          marginRight: '4px',
          fontSize: '16px'
        }}
      />
    )
  }
}

export default VerifiedBadge