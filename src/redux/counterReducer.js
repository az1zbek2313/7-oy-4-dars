const defaultState = {
    counter: 0
}

export function counterReducer(state = defaultState, actions) {
 switch (actions.type) {
    case "ADD":
        return {...state, counter:state.counter + 1}
 
    case "DELETE":
        return {...state, counter:state.counter - 1}
 
    case "GET":
        return {...state, counter:actions.payload}
 
    default:
        return state;
 }
}
