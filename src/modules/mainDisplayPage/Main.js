import React from 'react';
import SearchBox from './components/topSection/SearchBox.js';
import SelectorDisplay from './components/topSection/SelectorDisplay.js';
import ItemsGallery from './components/midSection/ItemsGallery.js';
import SearchNotification from './components/topSection/SearchNotification.js'

export default class Main extends React.Component{
  render(){
    return(<div>
          <SearchBox/>
          <SelectorDisplay/>
          <SearchNotification/>
          <ItemsGallery/>
        </div>)
  }
}
