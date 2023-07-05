import { Link } from "react-router-dom";

const Register = () => {
 /* const [formValue, setFormValue] = useState({
    email: '',
    password: ''})

  //const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();}*/

  return (
<div className="register">
      <p className="register__title">
        Регистрация
      </p>
      <form /*onSubmit={handleSubmit}*/ className="register__form">
        <div className="register__info">
        <input className="register__input register__input_type_email" id="email" name="email" type="email" placeholder="Email" /* value={formValue.email} onChange={handleChange} *//>
        <input className="register__input register__input_type_password" id="password" name="password" type="password" placeholder="Пароль" /*value={formValue.password} onChange={handleChange} *//>
         </div>
         <button type="submit" /*onSubmit={handleSubmit}*/ className="register__button">Зарегистрироваться</button>
        
      </form>
      <div className="register__signin">
        <p>Уже зарегистрированы?</p>
       <div className="register__login-link">Войти</div>    
        </div>
    </div>
  )
};

export default Register;
