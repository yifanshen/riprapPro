import React from 'react';
import './bootstrap.css';
import './AppHeader.css';

export default class AppHeader extends React.Component {
  render() {
    return (
        <div className="appHeader jumbotron align-middle">
          <h1>spots List</h1>
        </div>
        );
  }
}