import React from 'react';

export default (props) => {

    return <div className='img'>
        <img src={props.src} />
        <p> {props.quantity}</p>
        {props.item}

        <div>
            <select>
                <option>1kg- Rs 20.00</option>
                <option>500 g- Rs 10.00</option>
            </select>
        </div>

        <div>
            {
               props.count && props.AddButtonEnable ? 
                <div> 
                    <button 
                    onClick = {()=>props.incrementHandler(props.AddButtonEnable,props.count,props.itemId,props.item,props.quantity,props.price)}>
                    +</button> {props.count} in basket
                    <button onClick = {()=>props.decrementHandler(props.AddButtonEnable,props.count,props.itemId,props.item,props.quantity,props.price)}>
                    -</button>
                </div>:
                <div>
                    <button disabled>Qty</button>
                    <span>1</span>
                    <button
                        onClick={() => props.handlerADD(props.AddButtonEnable, props.itemId,props.item,props.quantity,props.count,props.price)}
                    >ADD
                    </button>
                </div>

            }
        </div>


    </div>;
}