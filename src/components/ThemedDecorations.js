// Code Invitation Component Here
import React from 'react';

class ThemedDecorations extends React.Component {
  render() {
    const updatedChildren = React.Children.map(this.props.children, child => {
      return (
        <div className={`${this.props.theme}`}>{child}</div> 
      );
    });
    return (
      <div>
        {updatedChildren}
      </div>
    )
  }
}

export default ThemedDecorations;
