import {combineReducers} from 'redux';
import customerReducer from './customer/customerReducer';
// import cakeReducer from './cake/cakeReducer';
// import icecreamReducer from './icecream/icecreamReducer';

const rootReducer  = combineReducers({
    // cake:cakeReducer,
    // icecream:icecreamReducer,
    customer:customerReducer
})
export default rootReducer;