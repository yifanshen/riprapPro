import React from 'react';
import './bootstrap.css';
import './AppItem.css';

export default class AppItem extends React.Component {
  getSpotName(){
  	return(
            <button type="button" className="btn btn-success d-inline-block">{this.props.spotName}</button> 
		);
  }

  getInfo(){
	return(
            <span className="info">{this.props.info}</span>
  		);
  }

  getRating(){
	return(
            <span className="rating">{this.props.rating}</span>
  		);
  }

  render() {
    return (
        <div className="appItem">
          {this.getSpotName()}
          {this.getInfo()}
          {this.getRating()}
        </div>
        );
  }
}