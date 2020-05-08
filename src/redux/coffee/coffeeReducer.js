import { BUY_COFFEE, STOCK_COFFEE } from './coffeeTypes';

const initialState = {
    cupOfCoffee: 30
}

const coffeeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_COFFEE:
            return {
                ...state,
                cupOfCoffee: state.cupOfCoffee -1
            }
        case STOCK_COFFEE:
            return {
                ...state,
                cupOfCoffee: state.cupOfCoffee +1
            }
        default:
            return state;
    }
}

export default coffeeReducer;
