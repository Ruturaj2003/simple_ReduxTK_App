import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { clearCart, calculateTotals } from '../features/cart/cartSlice';
import { useEffect } from 'react';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => {
    return state.cart;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  if (amount < 1) {
    return (
      <section>
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      {cartItems.map((item) => {
        return <CartItem key={item.id} {...item}></CartItem>;
      })}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          {' '}
          Clear Cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
