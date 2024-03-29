import { useDispatch } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';
import { clearCart } from '../features/cart/cartSlice';

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove All Items?</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Confirm{' '}
          </button>
          <button
            className="btn clear-btn"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
