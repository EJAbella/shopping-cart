import React from 'react';

const TotalCost = ({items}) => {

    let priceArr = items.map(item => item.product.priceInCents * item.quantity);
    let totalCost = priceArr.reduce((a, b) => a+b);

    return (
        <div>Total Price: ${totalCost/100}</div>
    )
}

export default TotalCost