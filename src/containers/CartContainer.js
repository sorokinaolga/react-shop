import { connect } from 'react-redux';

import CartPage from '../components/CartPage/CartPage';

const mapStateToProps = (state) => {
    return {
        products: state.products.items,
        cartProductsId: state.basket.items,
    };
};

export default connect(mapStateToProps)(CartPage);