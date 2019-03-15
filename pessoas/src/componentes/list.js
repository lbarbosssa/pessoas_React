import React, { Component } from "react";

export default class List extends Component {
  render() {
    const pessoas = this.props.pessoas;
    return (
      <ul class="list-group">
        {pessoas.map(
          ((data,
          index) => {
            return (
              <div key={index} className="list-group-item">
                <img className='avatar' src={data.picture.medium} />
                <h6 className='name'>{`${data.name.first} ${
                data.name.last
              }`}</h6>
              </div>
            );
          })
        )}
      </ul>
    );
  }
}
