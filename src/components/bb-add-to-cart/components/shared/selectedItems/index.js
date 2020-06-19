import React from 'react';
import './../../../components/style.css'

export default (props) => {

    return <div >
        {
            props.count !== 0 ?
                <div className='selectedItems'>
                    <p className='item'>{props.item}</p>
                    <p className='Quantity'>{props.Quantity}</p>
                    <p className='count'>{props.count}</p>
                    <p>{props.price}</p>
                </div> : null
        }
        
    </div>
}