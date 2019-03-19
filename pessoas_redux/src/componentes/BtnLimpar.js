import React, { Component } from "react";
import { connect } from "react-redux";
import { clear } from "../actions";

class BtnLimpar extends Component {
  onClickBtn = () => {
    this.props.myComponentAction({msg: 'Lista limpa!', type: 'alert-info'});
  }

  render() {
    return (
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={() => this.onClickBtn()}
      >
        <i className="far fa-trash-alt" />
      </button>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state.msg)
  return {
    pessoas: state.pessoas
  };
};

const mapDispatchToProps = dispatch => {
  return {
    myComponentAction: (data) => dispatch(clear(data))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(BtnLimpar);
