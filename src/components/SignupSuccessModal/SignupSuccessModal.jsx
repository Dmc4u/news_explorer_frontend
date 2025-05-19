// SignupSuccessModal.jsx
import Modal from "../Modal/Modal";

function SignupSuccessModal({ isOpen, onClose, onSignInClick }) {
  return (
    <Modal isOpen={isOpen} name="signup-success" onClose={onClose}>
      <div className="modal__content modal__content--success">
        <button className="modal__close" onClick={onClose} />
        <h2 className="modal__success-message">Registration successfully completed!</h2>
        <button
          className="modal__switch-button modal__success-link"
          onClick={onSignInClick}
        >
          Sign in
        </button>
      </div>
    </Modal>
  );
}

export default SignupSuccessModal;
