import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "./../../redux/cart/cartAction";
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from './../../redux/cart/cartSelector';
import "./cart-icon.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> {itemCount} </span>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
