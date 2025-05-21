import Modal from "../Modal/Modal";

function ModalWithForm({
  isOpen,
  name,
  onClose,
  title,
  children,
  buttonText,
  onSubmit,
  isDisabled,
  altText = "or Sign up",
  onAltClick,
  keyboardImgSrc = null,
}) {
  return (
    <Modal isOpen={isOpen} name={name} onClose={onClose}>
      <button className="modal__close" onClick={onClose} />
      <h1 className="modal__title">{title}</h1>
      <form onSubmit={onSubmit} className="modal__form">
        {children}
        <button type="submit" className="modal__submit" disabled={isDisabled}>
          {buttonText}
        </button>
      </form>

      {keyboardImgSrc && (
        <img
          src={keyboardImgSrc}
          alt="Mobile keyboard"
          className="modal__keyboard-img"
        />
      )}

      {altText && (
        <button className="modal__alt-button" onClick={onAltClick}>
          {altText}
        </button>
      )}
    </Modal>
  );
}

export default ModalWithForm;
