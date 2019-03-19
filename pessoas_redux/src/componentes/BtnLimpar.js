import React, { Component } from "react";
import { connect } from "react-redux";
import { clear } from "../actions";

class BtnLimpar extends Component {
  onClickBtn = () => {
    this.props.myComponentAction();
    //console.log('Executando o Action')
  };
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
    pessoas: state.pessoas,
    msg: state.msg
  };
};

const mapDispatchToProps = dispatch => {
  return {
    myComponentAction: () => dispatch(clear())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(BtnLimpar);
