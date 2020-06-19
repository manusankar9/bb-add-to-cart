import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { decrementInCart,incrementInCart,fetchAllItems,toggleADDbutton ,incrementer,decrementer} from './../actions';
import AllItems from './../components/shared/allItems'
import SelectedItems from './../components/shared/selectedItems'
import SelectedItemsTitle from './../components/shared/selectItemsTitle'
import Total from './../components/shared/total'
import './style.css'

const BbAddToCart = (props) => {

    useEffect(() => {
        async function fetchItemsData (){
            await props.fetchAllItems();
        }

       fetchItemsData();
    }, [])

    const handlerADD = (AddButtonEnable,id,item,Quantity,count,price)=>{

        props.toggleADDbutton({AddButtonEnable,id,item,Quantity,count,price});
    }

    const incrementHandler = (AddButtonEnable,count,id,item,Quantity,price)=>{

        props.incrementer({AddButtonEnable,count,id,item,Quantity,price})
        
        props.incrementInCart({count,id})

    }

    const decrementHandler = (AddButtonEnable,count,id,item,Quantity,price)=>{

        props.decrementer({AddButtonEnable,count,id,item,Quantity,price})

        props.decrementInCart({count,id})

    }

    console.log('>>>>>>>', props)

    return (<div>
                <div className='images'>
                    {
                    props.addItems.map(item =>
                    <AllItems
                    src = {item.img}
                    quantity = {item.quantity}
                    item = {item.item}
                    handlerADD = {handlerADD}
                    itemId = {item.itemId}
                    AddButtonEnable = {item.AddButtonEnable}
                    incrementHandler = {incrementHandler}
                    decrementHandler = {decrementHandler}
                    count = {item.count}
                    price = {item.price}
                    />)
                    }
                </div>

                <div>
                    {
                        props.filteredItems.length>0&&<SelectedItemsTitle/>
                    }
                </div>

                <div>
                    {
                        props.filteredItems.map(items=><SelectedItems
                            item = {items.item}
                            Quantity = {items.Quantity}
                            count = {items.count}
                            price = {items.price}
                            />)
                    }
                </div>

                <div>
                    {
                        props.filteredItems.length>0&&<Total
                        filteredItems = {props.filteredItems}
                        />
                    }
                </div>
         </div>)
}
const mapStateToProps = state => ({
    addItems: state.bbAddToCart.getAllData,
    filteredItems:state.bbAddToCart.itemsFilter
})

export default connect(mapStateToProps, {decrementInCart,incrementInCart, fetchAllItems ,toggleADDbutton,incrementer,decrementer})(BbAddToCart);