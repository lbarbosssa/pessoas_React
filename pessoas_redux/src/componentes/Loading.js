import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
}