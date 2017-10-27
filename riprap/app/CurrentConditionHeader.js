import React from 'react';
import './bootstrap.css';
import './CurrentConditionHeader.css';

export default class CurrentConditionHeader extends React.Component {
  render() {
    return (
        <div className="appHeader jumbotron align-middle">
          <h1>{this.props.spotName}</h1>
        </div>
        );
  }
}