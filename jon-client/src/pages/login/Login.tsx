import { Link } from "react-router-dom";
import ConnectUniversalProfileButton from "../../components/ConnectUniversalProfileButton";
import "./login.scss";

const Login = () => {

  return (
    <div className="login">
      <div className="login__card">
        <div className="login__card__left">
          <h1 className="login__card__left__title">Welcome to Hola.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span className="login__card__left__span">Don't you have an account?</span>
          <Link to="/register">
            <button className="login__card__left__registerBtn">Register</button>
          </Link>
        </div>
        <div className="login__card__right">
          <h1 className="login__card__right__title">Login</h1>
          <form className="login__card__right__form">
            <input
              className="login__card__right__form__input"
              type="text"
              placeholder="Username"
              name="username"
              // onChange={handleChange}
            />
            <input
              className="login__card__right__form__input"
              type="password"
              placeholder="Password"
              name="password"
              // onChange={handleChange}
            />
            <ConnectUniversalProfileButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;