import { useSelector } from 'react-redux';
import { CartIcon } from '../icons';
const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  console.log(amount);
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
      </div>
    </nav>
  );
};
export default Navbar;
