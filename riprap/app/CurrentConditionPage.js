import React from 'react';
import './bootstrap.css';
import './CurrentConditionHeader.css';
import CurrentConditionHeader from './CurrentConditionHeader.js';
import ImageLoader from 'react-imageloader';
import AppBtm from './AppBtm.js';
import './AppItem.css';

export default class CurrentConditionPage extends React.Component {
  render() {
    return (
        <div className="container"> 
        	<CurrentConditionHeader spotName="Canyons" />
        	<label for="input-2" className="control-label info">Rate The surf</label>
			<input id="input-2" className="input-2" class="rating rating-loading" data-min="0" data-max="5" data-step="0.1"/>
			<p className="info" > The 6 foot swell is coming in directly to the beach. </p>
			<ImageLoader src="./img.png" wrapper={React.DOM.div}> Image load failed!</ImageLoader>
        	<AppBtm />
        </div>
        );
  }
}