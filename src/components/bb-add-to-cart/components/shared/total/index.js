import React from 'react';

export default (props)=>{

        const totalPrice = props.filteredItems.reduce((acc,currentVal)=>{
            return acc+(currentVal.price*currentVal.count);
        },0)

        const totalQty = props.filteredItems.reduce((acc,currentVal)=>{
            return acc+currentVal.count;
        },0)
        

    return <div>
    <h3>Total Items </h3>{totalQty}
    <h3>Total Price</h3>{totalPrice}
</div>
}