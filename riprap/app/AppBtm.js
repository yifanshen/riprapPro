import React from 'react';
import './bootstrap.css';
import './AppBtm.css';

export default class AppBtm extends React.Component {
  getReturn(){
  	return(
  		<button type="button" className="btn btn-primary goToReturn">Return</button>
  		);
  }

  getLog(){
  	return(
		<button type="button" className="btn btn-info goToLog">log</button>
  	)
  }

  render() {
    return (
        <div className="appBtm">
          {this.getReturn()}
          {this.getLog()}
        </div>
        );
  }
}