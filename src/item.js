import React, { Component } from "react";
import * as ReactDOM from "react-dom";
import Image from "Beautiful-Surfing-Wallpaper.jpg";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center center"
  }
};

class Item extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    console.log("render item 1 below");
    return (
      <div
        className="transition-item detail-page background-parameters overlay"
        style={styles.paperContainer}
      >
        <div onClick={this.goBack.bind(this)}>
          <p style={{ padding: 10, backgroundColor: "snow" }}>
            This is an Item 1. Click here to go back.
          </p>
        </div>
      </div>
    );
  }

  goBack() {
    // this.props.history.goBack();
    this.props.history.push({
      pathname: "/"
    });
  }
}

export default Item;
