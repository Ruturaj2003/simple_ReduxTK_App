import { useDispatch, useSelector } from 'react-redux';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import { useEffect } from 'react';
import cartItems from './cartItems';
import Modal from './components/Modal';

function App() {
  const { isOpen } = useSelector((store) => store.modal);
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return <h3>Hold On A minute Data is Being Created</h3>;
  }

  return (
    <main>
      {isOpen && <Modal></Modal>}

      <Navbar></Navbar>
      <CartContainer></CartContainer>
    </main>
  );
}
export default App;
