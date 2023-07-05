function ImagePopup({card, isOpen, onClose}) {
  return (
    <div className={`popup popup_place_image ${isOpen && 'popup_opened'}`}>
          <div className="popup__image-container">
            <button
              className="popup__close-icon popup__close-icon_type_image"
              type="button"
              onClick={onClose}
            ></button>
            <div className="popup__image-form">
              <img className="popup__image-scale" src={card.link} alt={card.name} />
              <p className="popup__image-caption">{card.name}</p>
            </div>
          </div>
        </div>
  )
}
export default ImagePopup;