// SignupSuccessModal.jsx
import Modal from "../Modal/Modal";

function SignupSuccessModal({ isOpen, onClose, onSignInClick }) {
  return (
    <Modal isOpen={isOpen} name="signup-success" onClose={onClose}>
      <div className="modal__content-success">
        <button className="success__close" onClick={onClose}>
        </button>
        <h2 className="modal__success-message">
          Registration successfully completed!
        </h2>
        <button className="modal__switch-button" onClick={onSignInClick}>
          Sign in
        </button>
      </div>
    </Modal>
  );
}

export default SignupSuccessModal;
