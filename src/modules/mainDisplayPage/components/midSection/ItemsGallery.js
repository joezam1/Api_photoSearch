import React from 'react';
import store from '../../../../store/index.js';
import {removeSearchText, searchInProgress,setDataItems,setItemsQtyResponse} from '../../../../actions/actionCreators.js';
import {connect} from 'react-redux';
import * as api from '../../../../api/index.js';
import $ from 'jquery';

export class ItemsGallery extends React.Component{
  constructor(props){
    super(props);
    this.itemsArraySelected = [];

    this.getSelectedItemsArray = this.getSelectedItemsArray.bind(this);
  }
  componentDidUpdate(prevProps, prevState){
    if(prevProps.inputText !== this.props.inputText
      && prevProps.searchInProgress !== this.props.searchInProgress){
      var input = this.props.inputText;
      var urlflickr = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c5566c22791ced6701fffd946e528be3&text="+input+"&extras=+owner_name&format=json&nojsoncallback=1";
      api.getPhotosAjaxJsonFormat(urlflickr);
    }
    if(this.props.inputText === "" && this.props.searchInProgress===true){
      store.dispatch(searchInProgress(false));
    }
    var itemsProp = this.props.dataItems;
    if(itemsProp !== undefined && Object.prototype.toString.apply(itemsProp)&& !Array.isArray(itemsProp) ){
      this.itemsArraySelected = itemsProp.photos.photo;
      var qty = itemsProp.photos.photo.length;
      if(qty>0){
        store.dispatch(setItemsQtyResponse(qty));
      }

    }
  }

  getSelectedItemsArray(){
    var tempArray =[];
    if(this.itemsArraySelected.length>0){
      for(var a=0; a<this.props.selectorQtyOnDisplay;a++){
          tempArray.push(this.itemsArraySelected[a]);
      }
    }
    return tempArray;
  }

  render(){
      var spinner = (<div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>)
      var itemsTempArray = this.getSelectedItemsArray();
      var photosLoaded  = (itemsTempArray!== undefined && itemsTempArray.length>0) ?
                         itemsTempArray.map((item,index)=>{
                         return <div key={item.id} className="card" >
                                  <div className="item-container" >
                                      <h3 key={index} className="item-owner-name"  >{item.ownername}</h3>
                                      <img key={item.id}  src={"https://farm" + item.farm + ".staticflickr.com/" + item.server + "/" + item.id + '_' + item.secret + ".jpg"} className="photo-image"/>
                                  </div>
                                </div>
                        }) :"";
      var currentState = store.getState();
      var elementOnDisplay = (currentState.search.inProgress === true) ? spinner : photosLoaded ;
      return(<section className="items-gallery-section">
                <div className="items-gallery-container">
                  <div className="items-list">
                  {elementOnDisplay}
                  </div>
                </div>
            </section>)
  }
}

function mapStateToProps(state){
  return {
    inputText : state.search.text,
    searchInProgress: state.search.inProgress,
    dataItems:state.data.items,
    selectorQtyOnDisplay:state.selector.qtyOnDisplay
  }
}

export default connect(mapStateToProps)(ItemsGallery);
