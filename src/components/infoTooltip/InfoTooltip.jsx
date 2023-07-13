import Popup from "../popup/Popup";

export default function InfoTooltip({ name, isSuccess, isOpen, onClose }) {
  return (
    <Popup name={name} isOpen={isOpen} onClose={onClose}>
      <div className="popup__form">
        <div
          className={`popup__success-image ${
            !isSuccess ? "popup__success-image_type_error" : ""
          }`}
        />
        <p className="popup__success-text">
          {isSuccess
            ? "Вы успешно зарегистрировались"
            : "Что-то пошло не так! Попробуйте еще раз."}
        </p>
      </div>
    </Popup>
  );
}
