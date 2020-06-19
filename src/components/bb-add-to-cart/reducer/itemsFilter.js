const initialState = [];

export default (state = initialState,action)=>{
debugger;
    switch (action.type){
        case "ADD_INTO_CART":return [...state,action.payload];
        case "INCREMENT_IN_CART":return state.map(e=>e.id === action.payload.id?{...e,count:action.payload.count+1}:e);
        case "DECREMENT_IN_CART":return state.map(e=>e.id === action.payload.id?{...e,count:action.payload.count-1}:e);
        default:return state;
    }
}