const initialState = [];

export default (state = initialState,action)=>{
    debugger;
    switch(action.type){
        case "FETCH_DATA":return action.payload;
        case "TOGGLE_BUTTON":return state.map(item=>item.itemId === action.payload.id?
        {...item,AddButtonEnable:!action.payload.AddButtonEnable,count:1}:item)
        case "INCREMENT":return state.map(item=>item.itemId === action.payload.id?{...item,count:action.payload.count+1}:item)
        case "DECREMENT":return state.map(item=>item.itemId === action.payload.id?{...item,count:action.payload.count-1}:item)
        default : return state;
    }
    
}