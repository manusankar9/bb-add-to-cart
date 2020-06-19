import {getAllData} from '../components/shared/service'

export const fetchAllItems = ()=>{
    return async dispatch=>{
        const payload = await getAllData();

        dispatch({
            type: "FETCH_DATA",
            payload
        })
    }
}

export const toggleADDbutton = payload =>dispatch=>{
    debugger;
        dispatch({
            type :"ADD_INTO_CART",
            payload
        })

    dispatch({
        type :"TOGGLE_BUTTON",
        payload
    })
}

export const incrementInCart = payload =>dispatch=>{
debugger;
    dispatch({
        type:"INCREMENT_IN_CART",
        payload
    })
}

export const incrementer = payload =>dispatch=>{
    dispatch({
        type:"INCREMENT",
        payload
    })
   
}

export const decrementInCart = payload =>dispatch=>{
    debugger;
    
        dispatch({
            type:"DECREMENT_IN_CART",
            payload
        })
    }
    

export const decrementer = payload =>dispatch=>{
   
    dispatch({
        type:"DECREMENT",
        payload
    })
    
}