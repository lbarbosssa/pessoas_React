import React from "react";

export default class Alert extends React.Component {
  render() {
    return (
      <div className={`alert ${this.props.data.type} my-alert`} role="alert">
        {this.props.data.msg}
      </div>
    );
  }
}
