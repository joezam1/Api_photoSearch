import initialState from './initialState.js';

export default function searchProcessReducer(state = initialState.search, action){

    switch(action.type){

      case "SET_SEARCH_TEXT":
          return { ...state,
            text: action.text
      }

      case "REMOVE_SEARCH_TEXT":
          return { ...state,
            text: action.text
      }

      case "SEARCH_IN_PROGRESS":
      return { ...state,
        inProgress: action.inProgress
      }
      
      default:
          return state;
    }
}
