import React from 'react';
import {connect} from 'react-redux';

class SearchNotification extends React.Component{
  constructor(props){
    super(props);
    this.flickrPage="";
  }

  componentDidUpdate(prevProps, prevState){
    var searchInfo = this.props.dataItems;
    if(searchInfo !== undefined && Object.prototype.toString.apply(searchInfo)&& !Array.isArray(searchInfo) ){
      this.flickrPage = searchInfo.photos.page;
    }
  }

  render (){
    var flickrPage =(this.flickrPage !==0 && this.flickrPage !=="0" && this.flickrPage !=="")? this.flickrPage :"";
    var itemsFound = (this.props.itemsQtyResponse !=="" && this.props.itemsQtyResponse !== 0 && this.props.itemsQtyResponse !=="0")? this.props.itemsQtyResponse  :"";
    return(<section className="search-notification-container">
            <ul className="search-notification">
              <li className="single-notification">Search: {this.props.dataSearchedTerm}</li>
              <li className="single-notification"><span>Items found:{itemsFound}</span></li>
              <li className="single-notification"><span>Flickr Page:{flickrPage}</span></li>
            </ul>
        </section>)
  }
}

function mapStateToProps(state){
  return {
    inputText : state.search.text,
    searchInProgress: state.search.inProgress,
    dataItems: state.data.items,
    dataSearchedTerm:state.data.searchedTerm,
    itemsQtyResponse:state.data.itemsQtyResponse,
    iconOnDisplay: state.icon.onDisplay,

  }
}
export default connect(mapStateToProps)(SearchNotification);
