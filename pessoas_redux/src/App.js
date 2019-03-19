import React, { Component } from 'react';

import { connect } from 'react-redux'
import { setList } from './actions'

import './App.css';
import MyInput from './componentes/MyInput';
import List from './componentes/List';

class App extends Component {
  constructor(props){
    super(props)
     this.state ={ name: 'Lucas' }

  }
  onClickBtn = () => {
    this.props.myComponentAction(this.state)
    //console.log('Executando o Action')
  }

  render() {
    const full = { height: "100vh" };
    return (
      <div className="flex" style={!this.props.pessoas ? full : null}>
        <div className="content">
           {this.props.pessoas ? <List pessoas={this.props.pessoas} /> : <MyInput />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state.msg)
  return {
    pessoas: state.pessoas
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    myComponentAction: (data) => dispatch(setList(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
