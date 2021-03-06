
import React from 'react';
import AppHeader from './AppHeader.js';
import AppItem from './AppItem.js';
import AppBtm from './AppBtm.js';


export default class AppPage extends React.Component {
  render() {
    return (
        <div className="appPage container">
          <AppHeader />
          <AppItem spotName="shor Sands" info="6 ft offshore" rating=":-P"/>
          <AppItem spotName="Indian Beach" info="5 ft cross-off" rating=":-)"/>
          <AppItem spotName="pacific city" info="6 ft offshore" rating=":-}"/>
          <AppItem spotName="cape kiwanda" info="8 ft crosswind" rating=":-["/>
          <AppItem spotName="Lincoln city" info="8 ft cross-on" rating=":-("/>
          <AppItem spotName="Gleneden" info="6 ft cross-off" rating=":-P"/>
          <AppItem spotName="Otter Rock" info="4 ft offshore" rating=":-P"/>
          <AppItem spotName="Agate Beach" info="8 ft onshore" rating=":-<"/>
          <AppBtm />
        </div>
        );
  }
}