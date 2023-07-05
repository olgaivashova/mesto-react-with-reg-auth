import Card from "../Card/Card";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


function Main({ onEditProfile, onAddPopup, onAvatar, onCard, card, onDelete }) {
  const currentUser = useContext(CurrentUserContext)

    return (
    <main className="main">
      <section className="profile">
        <button
          type="button"
          className="profile__avatar-button"
          onClick={onAvatar}
        >
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
        </button>
        <div className="profile__container">
          <div className="profile__info">
            <div className="profile__stripe">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="open-button profile__edit-button"
                type="button"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__profession">{currentUser.about}</p>
          </div>
          <button
            className="open-button profile__add-button"
            type="button"
            onClick={onAddPopup}
          ></button>
        </div>
      </section>
      <section className="elements">
        <ul className="elements__container">
         {card.map((data) => {
            return (
              <li className="elements__grid-item" key={data._id}>
                <Card card={data}  onCard={onCard} onDelete={onDelete}/>
              </li>
            );
          })} 
        
        </ul>
      </section>
    </main>
  );
}

export default Main;