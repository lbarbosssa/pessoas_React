import React, { Component } from "react";
import BtnLimpar from "./BtnLimpar";

export default class List extends Component {
  render() {
    const pessoas = this.props.pessoas;
    return (
    [<BtnLimpar key={1}/>,
      <ul className="list-group list" key={2}>
        {pessoas.map(
          ((data,
          index) => {
            return (
              <div key={index} className="list-group-item itemList">
              <span className="badge badge-pill badge-primary">{data.dob.age}</span>
                <img className='avatar' src={data.picture.medium} />
                <h6 className='name'>{`${data.name.first} ${
                data.name.last
              }`}</h6>
                <h6 className='email'>{data.email}</h6>
              </div>
            );
          })
        )} 
        
      </ul>]
    );
  }
}