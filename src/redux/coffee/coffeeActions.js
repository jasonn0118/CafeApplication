import { BUY_COFFEE } from './coffeeTypes';
import { STOCK_COFFEE } from './coffeeTypes';

export const buyCoffee = () => {
    return {
        type: BUY_COFFEE
    }
}

export const stockCoffee = () => {
    return {
        type: STOCK_COFFEE
    }
}