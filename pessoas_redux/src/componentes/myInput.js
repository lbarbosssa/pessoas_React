import React, { Component } from "react";

import {connect} from 'react-redux'
import {setList} from '../actions'

import axios from 'axios'
import Loading from "./Loading";

const loading = false

class MyInput extends Component {
  constructor(props) {
    super(props);

    this.getValue = this.getValue.bind(this);
  }
  getValue(e) {
    e.preventDefault();
    //this.setState({loading: true})
    axios
      .get(`https://randomuser.me/api?nat=br&results=${this.qnt.value}`)
      .then(data => {
        //this.setState({loading: false})
        this.props.myComponentAction(data.data.results)
      })
      .catch(error => {
        //this.setState({loading: false})
        console.log(error);
        
      });
    
  }
  

  componentDidMount(){
    this.props.myComponentAction(this.state)
  }

  render() {
    return (
      
      <form onSubmit={this.getValue}>
        {loading ? <Loading /> : (
          <div className="form-row">
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="Quantos resultados?"
              id="qnt"
              ref={ref => (this.qnt = ref)}
              min={1}
              max={100}
            />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary">
              Gerar
            </button>
          </div>
        </div>
        )}
        
      </form>
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

export default connect(mapStateToProps,mapDispatchToProps)(MyInput);
