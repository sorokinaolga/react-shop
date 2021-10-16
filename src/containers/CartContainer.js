import { connect } from 'react-redux';

import CartPage from '../components/CartPage/CartPage';
import { getProductsById } from '../store/selectors';

const mapStateToProps = (state) => {
    const cartProductsId = state.basket.items;
    return {
        cartProducts: getProductsById(state, cartProductsId),
    };
};

export default connect(mapStateToProps)(CartPage);