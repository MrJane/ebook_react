import React from 'react';

export default class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleScroll = (e) => {
    const offsetY = e.target.scrollTop || window.pageYOffset || document.body.scrollTop;
    console.log(offsetY,'哈哈哈');
  };

  render() {
    return (
      <div className="scroll-wrapper" onScroll={this.handleScroll}>
        {this.props.children}
      </div>
    )
  }
};
