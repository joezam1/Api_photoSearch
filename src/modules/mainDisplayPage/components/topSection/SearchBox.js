import React from 'react';
import store from '../../../../store/index.js';
import {setSearchText,searchInProgress, removeDataItems, setIconOnDisplay,setSearchTerm} from '../../../../actions/actionCreators.js';
import {connect} from 'react-redux';

export class SearchBox extends React.Component{
  constructor(props){
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.identifyClickArea = this.identifyClickArea.bind(this);
  }

  componentDidMount(){
      document.addEventListener("mousedown",this.identifyClickArea)
  }

  componentWillUnmount(){
      document.removeEventListener('mousedown', this.identifyClickArea);
  }

  identifyClickArea(event){
    event.stopPropagation();
    var eventTargetId = event.target.id;
    if(eventTargetId ==="input-search-box-id"){
      store.dispatch(setIconOnDisplay("cancel"))
      return;
    }
    if(eventTargetId !=="cancel" && eventTargetId !=="search" &&
        eventTargetId !=="2" &&eventTargetId !=="10" &&
        eventTargetId !=="30"
      ){
      store.dispatch(setIconOnDisplay("search"))
      return;
    }
  }

  handleInputChange(event){
    event.preventDefault();
    var currentState = store.getState();
    if(currentState.icon.onDisplay !=="cancel"){
      store.dispatch(setIconOnDisplay("cancel"));
    }
  }

  submitForm(event){
    event.preventDefault();
    var eventId = event.target.id;
      if(eventId === "cancel"){
        this.inputText.value = "";
        store.dispatch(setIconOnDisplay("search"));
        return;
      }
    var inputTextValue = this.inputText.value;
    store.dispatch(setSearchText(inputTextValue));
    store.dispatch(setSearchTerm(inputTextValue))
    store.dispatch(searchInProgress(true));
    store.dispatch(removeDataItems());
    this.inputText.value = "";
  }
  render(){
    var currentState= store.getState();
    var iconTypeSearch = <span id="search"className="search">&#x1F50D;</span>
    var iconTypeCancel = <span id="cancel"className="cancel">&times;</span>
    var iconType = (currentState.icon.onDisplay ==="search")? iconTypeSearch : iconTypeCancel;
    var placeholder = "search by city, e.g. sydney and results can be changed"
    return(<section>
          <div className="banner-title-container">
            <div className="banner-title-box">
                <h1 className="banner-name">Flickr Search Fhotos Fun!</h1>
            </div>
          </div>
          <form className="form-search-box">
            <input type="text" name="search-box" className="search-box" id="input-search-box-id" ref={(c) => this.inputText = c}  placeholder={placeholder} onChange={this.handleInputChange}/>
            <button className="search-button" id={this.props.iconOnDisplay} onClick={this.submitForm} disabled={this.props.searchInProgress}> {iconType}</button>
          </form>
      </section>)
  }
}

function mapStateToProps(state){
  return {
    inputText : state.search.text,
    searchInProgress: state.search.inProgress,
    dataItems: state.data.items,
    iconOnDisplay: state.icon.onDisplay
  }
}
export default connect(mapStateToProps)(SearchBox);
