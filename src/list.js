import React, { Component } from "react";
import * as ReactDOM from "react-dom";

class List extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    console.log("render list below");
    let arr = [1];
    let listItems = arr.map((item, index) => {
      return (
        <div>
          <div
            key={index}
            onClick={this.goToItem.bind(this)}
            style={{ padding: 10, backgroundColor: "aqua" }}
          >
            This is a paragraph - {item}
          </div>
          <div
            key={index + 9999}
            onClick={this.goToItem2.bind(this)}
            style={{ padding: 10, backgroundColor: "silver" }}
          >
            This is a paragraph - 2
          </div>
        </div>
      );
    });
    return <div className="transition-item list-page">{listItems}</div>;
  }

  goToItem() {
    this.props.history.push({
      pathname: "/item"
    });
  }

  goToItem2() {
    this.props.history.push({
      pathname: "/item2"
    });
  }
}

export default List;
