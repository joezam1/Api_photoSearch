export function setSearchText(searchText){
  return{
    type: "SET_SEARCH_TEXT",
    text: searchText
  }
}

export function removeSearchText(){
  return {
    type: "REMOVE_SEARCH_TEXT",
    text:""
  }
}

export function searchInProgress(isInProgress){
  return {
    type: "SEARCH_IN_PROGRESS",
    inProgress:isInProgress
  }
}

export function setDataItems(dataItems){
  return {
    type:"SET_DATA_ITEMS",
    items:dataItems
  }
}

export function removeDataItems(){
  return {
    type: "REMOVE_DATA_ITEMS",
    items:[]
  }
}

export function setSearchTerm(termForSearch){
    return{
      type: "SET_SEARCH_TERM",
      searchedTerm: termForSearch
    }
}

export function setItemsQtyResponse(qtyResponse){
    return{
      type: "SET_ITEMS_QTY_RESPONSE",
      itemsQtyResponse: qtyResponse
    }
}

export function setIconOnDisplay(iconType){
  return{
    type:"ICON_ON_DISPLAY",
    onDisplay:iconType
  }
}

export function setSelectorDisplay(qty){
  return{
    type:"SET_SELECTOR_DISPLAY",
    qtyOnDisplay: qty
  }
}

export function setPreviousSelectorDisplay(prevQty){
  return{
    type:"SET_PREVIOUS_SELECTOR_DISPLAY",
    previousQtyOnDisplay: prevQty
  }
}
