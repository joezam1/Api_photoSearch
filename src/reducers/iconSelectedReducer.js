import initialState from './initialState';

export default function iconSelectedReducer(state=initialState.icon, action){
      switch(action.type){
        
          case "ICON_ON_DISPLAY":
            return{ ...state,
              onDisplay: action.onDisplay
            }

          default:
          return state;
      }
}
