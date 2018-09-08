import React, { Component } from "react";
import * as ReactDOM from "react-dom";

class Item2 extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    console.log("render item 2 below");
    return (
      <div className="transition-item detail-page">
        <div onClick={this.goBack.bind(this)}>
          <p style={{ padding: 10, backgroundColor: "lavender" }}>
            This is an Item 2. Click here to go to Item 1.
          </p>
        </div>
      </div>
    );
  }

  goBack() {
    // this.props.history.goBack();
    this.props.history.push({
      pathname: "/item"
    });
  }
}

export default Item2;
