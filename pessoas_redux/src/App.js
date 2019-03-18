import React, { Component } from 'react';
import { hello } from './actions'

import { connect } from 'react-redux'

import './App.css';

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
    return (
      <div className="App">
        <header className="App-header">
          <p>{(this.props.msg)}</p>
           <button onClick={ () => this.onClickBtn() }>Chamar a Action</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state.msg)
  return {
    msg: state.msg,
    data: state.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    myComponentAction: (data) => dispatch(hello(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
