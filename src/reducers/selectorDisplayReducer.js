import initialState from './initialState';


export default function selectorDisplayReducer(state = initialState.selector, action){
    switch(action.type){

      case "SET_SELECTOR_DISPLAY":
        return { ...state,
          qtyOnDisplay:action.qtyOnDisplay
        }

      case "SET_PREVIOUS_SELECTOR_DISPLAY":
        return { ...state,
          previousQtyOnDisplay:action.previousQtyOnDisplay
        }

      default:
        return state;
    }
}
