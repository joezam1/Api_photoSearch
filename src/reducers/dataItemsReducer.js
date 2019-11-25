import initialState from './initialState';

export default function dataItemsReducer(state=initialState.data, action){
      switch(action.type){

        case "SET_DATA_ITEMS":
            return { ...state,
              items: action.items
            }

        case "REMOVE_DATA_ITEMS":
            return { ...state,
              items:[]
            }

        case "SET_SEARCH_TERM":
            return { ...state,
              searchedTerm:action.searchedTerm
            }

        case "SET_ITEMS_QTY_RESPONSE":
            return { ...state,
              itemsQtyResponse:action.itemsQtyResponse
            }
            
        default :
        return state;
      }
}
