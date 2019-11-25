const initialState ={
  search:{
    text:'',
    inProgress:false,
  },
  data:{
    items:[],
    searchedTerm:"",
    itemsQtyResponse:0
  },
  icon:{
    onDisplay:"search"
  },
  selector:{
    qtyOnDisplay:2,
    previousQtyOnDisplay:0
  }
}

export default initialState;
