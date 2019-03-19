import React, { Component } from 'react';

import { connect } from 'react-redux'
import { getList } from './actions'

import './App.css';
import MyForm from './componentes/MyForm'
import List from './componentes/List';

class App extends Component {
  constructor(props){
    super(props)
     this.state ={ name: 'Lucas' }

  }

  render() {
    const full = { height: "100vh" };
    return (
      <div className="flex" style={!this.props.pessoas ? full : null}>
        <div className="content">
           {this.props.pessoas ? <List pessoas={this.props.pessoas} /> : <MyForm />}
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
    myComponentAction: () => dispatch(getList())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
