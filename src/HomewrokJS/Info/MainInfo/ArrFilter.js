import { ARR_FILTER } from "./ActionTypes";

const initialArrValue = ["css", "html 5", "java script", "reactjs"];

export default function arrReducer(state = initialArrValue, action) {
    switch (action.type) {
      case ARR_FILTER:
        return state.filter(arr => !arr.includes(" "));
      default:
        return state;
    }
}

// 1) Տրված է Բառերով լցված զանգված, ֆիլտրել դրանք թողնելով միայն այն բառերը որոնք չեն պարունակում բացատ(прабел)