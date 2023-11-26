import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ConnectUniversalProfileButton from "../../components/ConnectUniversalProfileButton";
import EthersContext from "../../contexts/EthersContext/EthersContext";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  // routing logic here
  const navigate = useNavigate();
  const { universalProfile } = useContext(EthersContext);

  useEffect(() => {
    if (universalProfile) {
      // then we route
      navigate("/");
    }
  }, [universalProfile]);

  return (
    <div className="login">
      <div className="login__card">
        <div className="login__card__left">
          <h1 className="login__card__left__title">Welcome to Blockbuzz.</h1>
          <p>
            Welcome to blockbuzz, a decentralized social media platform. Connect
            to your Universal Profile
          </p>
          <span className="login__card__left__span">
            Don't have an account?
          </span>
          <Link to="/register">
            <button className="login__card__left__registerBtn">Register</button>
          </Link>
        </div>
        <div className="login__card__right">
          <h1 className="login__card__right__title">Login</h1>

          <ConnectUniversalProfileButton />
        </div>
      </div>
    </div>
  );
};

export default Login;
