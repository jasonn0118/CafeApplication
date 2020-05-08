import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyCoffee, stockCoffee } from '../redux';

function HooksCoffeeContainer() {
    const cupOfCoffee = useSelector(state => state.coffee.cupOfCoffee);
    const dispatch = useDispatch();
    return (
        <div>
          <h2>Cup of coffee - {cupOfCoffee}</h2>
          <button onClick={() => dispatch(buyCoffee())}>Buy Coffee</button>
          <button onClick={() => dispatch(stockCoffee())}>Stock Coffee</button>
        </div>
    )
}

export default HooksCoffeeContainer
