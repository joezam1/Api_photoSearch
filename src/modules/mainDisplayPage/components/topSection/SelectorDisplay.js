import React from 'react';
import store from '../../../../store/index.js';
import {setSelectorDisplay,setPreviousSelectorDisplay} from '../../../../actions/actionCreators.js';

export default class SelectorDisplay extends React.Component{
  constructor(props){
    super(props);
    this.setSelectorDisplay = this.setSelectorDisplay.bind(this);
    this.setItemsQtyOnDisplay = this.setItemsQtyOnDisplay.bind(this);
    this.getBrowserCurrentSize = this.getBrowserCurrentSize.bind(this);
  }

  componentDidMount(){
      window.addEventListener("resize", this.setItemsQtyOnDisplay)
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.setItemsQtyOnDisplay)
  }

  setItemsQtyOnDisplay(){
    var currentState = store.getState();
    var itemsQtyResponse = currentState.data.itemsQtyResponse;
    var currentQtyOnDisplay = currentState.selector.qtyOnDisplay;
    var previousQtyOnDisplay = currentState.selector.previousQtyOnDisplay;
    var currentSize = this.getBrowserCurrentSize();
    if(currentSize !==null && currentSize != undefined){
      if(currentSize.width <768) {
        if(itemsQtyResponse !==currentQtyOnDisplay){
          store.dispatch(setSelectorDisplay(itemsQtyResponse));
          store.dispatch(setPreviousSelectorDisplay(currentQtyOnDisplay ));
        }
      }
      else{
        if(previousQtyOnDisplay !==0){
          store.dispatch(setSelectorDisplay(previousQtyOnDisplay));
          store.dispatch(setPreviousSelectorDisplay(0));
        }
      }
    }
  }

  getBrowserCurrentSize(){
    var root = document.getElementById('root');
    var size = {
      width: (window.innerWidth > document.body.clientWidth)? window.innerWidth : document.body.clientWidth,
      height: (window.innerHeight > document.body.clientHeight)? window.innerHeight : document.body.clientHeight
    }
    return size;
  }

  setSelectorDisplay(event){
    var currentState= store.getState();
    var previousQtyOnDisplay = currentState.selector.previousQtyOnDisplay
    var id = event.target.value;
    var idInt = parseInt(id);
    if(!isNaN(idInt)){
      store.dispatch(setSelectorDisplay(idInt));
      store.dispatch(setPreviousSelectorDisplay(previousQtyOnDisplay));
    }
  }
  
  render(){
    return(<section className="radio-buttons-container">
              <div>
                <input type="radio" id="2" name="radio-button" className="radio-button-class" value="2" defaultChecked onChange={this.setSelectorDisplay}/>
                <label htmlFor="2">2</label>
              </div>

              <div>
                <input type="radio" id="10" name="radio-button" className="radio-button-class" value="10" onChange={this.setSelectorDisplay}/>
                <label htmlFor="10">10</label>
              </div>

              <div>
                <input type="radio" id="30" name="radio-button" className="radio-button-class" value="30" onChange={this.setSelectorDisplay}/>
                <label htmlFor="30">30</label>
              </div>
          </section>)
  }
}
