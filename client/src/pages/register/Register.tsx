import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
      <div className="register__card">
        <div className="register__card__left">
          <h1 className="register__card__left__title">Hola Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span className="register__card__left__span">Do you have an account?</span>
          <Link to="/login">
            <button className="register__card__left__loginBtn">Login</button>
          </Link>
        </div>
        <div className="register__card__right">
          <h1 className="register__card__right__title">Register</h1>
          <form className="register__card__right__form">
            <input
              className="register__card__right__form__input"
              type="text"
              placeholder="Username"
              name="username"
              // onChange={handleChange}
            />
            <input
              className="register__card__right__form__input"
              type="email"
              placeholder="Email"
              name="email"
              // onChange={handleChange}
            />
            <input
              className="register__card__right__form__input"
              type="password"
              placeholder="Password"
              name="password"
              // onChange={handleChange}
            />
            <input
              className="register__card__right__form__input"
              type="text"
              placeholder="Name"
              name="name"
              // onChange={handleChange}
            />
            <button className="register__card__right__form__registerBtn">Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register