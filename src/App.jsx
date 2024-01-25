import { useDispatch, useSelector } from 'react-redux';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { calculateTotals } from './features/cart/cartSlice';
import { useEffect } from 'react';
import cartItems from './cartItems';

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      <Navbar></Navbar>
      <CartContainer></CartContainer>
    </main>
  );
}
export default App;
