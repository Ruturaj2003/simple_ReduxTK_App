import { useSelector } from 'react-redux';
import { CartIcon } from '../icons';
const Navbar = () => {
  // can use  'store' intead of 'state' as well to understand that we are aceesing whole store
  const { amount } = useSelector((store) => store.cart);
  console.log(amount);
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon></CartIcon>
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
