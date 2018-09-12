import React from 'react';
import CartItem from './CartItem';
import TotalCost from "./TotalCost";

const CartItems = ({items}) => {
    let itemList = items.map((item, i) => <CartItem key={i} item={item} />);

    return (
        <div className="container">
            <h1>Cart Items</h1>
            <div className="list-group">
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-md-8">Product</div>
                        <div className="col-md-2">Price</div>
                        <div className="col-md-2">Quantity</div>
                    </div>
                </div>
                {itemList}
            </div>
            <TotalCost items={items}/>
        </div>
    )
};


export default CartItems;