import $ from 'jquery';
import store from '../store/index.js';
import {removeSearchText, searchInProgress,setDataItems} from '../actions/actionCreators.js';


export function getPhotosAjaxJsonFormat(flickerUrl){
  $.getJSON(flickerUrl)
     .done(function (data) {
       store.dispatch(setDataItems(data));
       store.dispatch(searchInProgress(false));
       store.dispatch(removeSearchText());
     })
     .fail(function() {
      console.log( "error" );
    })
    .always(function() {
      console.log( "complete" );
    });

}
