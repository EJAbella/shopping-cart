import React from 'react';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItems from './CartItems';

const App = () => {
    return (
        <div>
            <CartHeader/>
            <CartItems/>
            <CartFooter copyright={'2018'}/>
        </div>
    )
}

export default App;
