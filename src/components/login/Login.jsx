
const Login = () => {
  return (
    <div className="login">
      <p className="login__title">
        Вход
      </p>
      <form /*onSubmit={handleSubmit}*/ className="login__form">
      <div className="login__info">
        <input required className="login__input login__input_type_email"id="email" name="email" type="text" placeholder="Email"/*value={formValue.username} onChange={handleChange}*/ />
        <input required className="login__input login__input_type_password" id="password" name="password" type="password" placeholder="Пароль" /*value={formValue.password} onChange={handleChange}*/ />
        </div>
          <button type="submit" className="login__button">Войти</button>
        
      </form>
      </div>
  )
};

export default Login;
