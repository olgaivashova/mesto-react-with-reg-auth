import Header from "./header/Header";
import Main from "./Main/Main";
import Footer from "./footer/Footer";
import PopupWithForm from "./popupWithForm/PopupWithForm";
import ImagePopup from "./imagePopup/ImagePopup";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";
import EditProfilePopup from "./editProfilePopup/EditProfilePopup";
import AddPlacePopup from "./addPlacePopup/AddPlacePopup";
import EditAvatarPopup from "./editAvatarPopup/EditAvatarPopup";


function App() {
  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [imagePopup, setImagePopup] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [card, setCard] = useState([]);
  const [deletedCardId, setDeletedCardId] = useState("");

  function handleEditAvatarClick() {
    setIsAvatarPopupOpen(!isAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPopupOpen(!isAddPopupOpen);
  }
  function handleImageClick(card) {
    setSelectedCard(card);
    setImagePopup(!imagePopup);
  }
  function handleDeletePopupClick(cardId) {
    setDeletedCardId(cardId);
    setIsDeletePopupOpen(!isDeletePopupOpen);
  }

  function closeAllPopups() {
    setIsAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPopupOpen(false);
    setImagePopup(false);
    setIsDeletePopupOpen(false);
  }

  function handleDeleteSubmit(evt) {
    evt.preventDefault();
    api
      .deleteCard(deletedCardId)
      .then(() => {
        setCard(
          card.filter((item) => {
            return item._id !== deletedCardId;
          })
        );
        closeAllPopups();
      })
      .catch((err) => console.error(err));
  }

  function handleUpdateUser(data) {
    api
      .setInfo(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(console.error);
  }

  function handleAddPlaceSubmit(data) {
    api
      .addCard(data)
      .then((res) => {
        setCard([res, ...card]);
        closeAllPopups();
      })
      .catch(console.error);
  }
  function handleUpdateAvatar(data) {
    api
      .setAvatar(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(console.error);
  }
  useEffect(() => {
    Promise.all([api.getInfo(), api.getCards()])
      .then(([user, dataCards]) => {
        setCurrentUser(user);
        setCard(dataCards);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App" style={{backgroundColor: '#000'}}>
      <div className="page__content">
        <Header />
        <CurrentUserContext.Provider value={currentUser}>
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPopup={handleAddPlaceClick}
            onAvatar={handleEditAvatarClick}
            onCard={handleImageClick}
            onDelete={handleDeletePopupClick}
            card={card}
          />
          <Footer />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <AddPlacePopup
            isOpen={isAddPopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />

          <EditAvatarPopup
            isOpen={isAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <PopupWithForm
            name="delete"
            title="Вы уверены?"
            button="Да"
            isOpen={isDeletePopupOpen}
            onClose={closeAllPopups}
            onSubmit={handleDeleteSubmit}
          />

          <ImagePopup
            card={selectedCard}
            isOpen={imagePopup}
            onClose={closeAllPopups}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
