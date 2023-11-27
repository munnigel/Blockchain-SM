import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/accountSlice'; 
import { Link } from 'react-router-dom';
import './register.scss';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerUser(formData));

    // Save the email to localStorage
    localStorage.setItem('currentUser', formData.email);
    // redirect to home page
    navigate('/');

  };
  
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
              onChange={handleChange}
            />
            <input
              className="register__card__right__form__input"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              className="register__card__right__form__input"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              className="register__card__right__form__input"
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <button className="register__card__right__form__registerBtn" onClick={handleSubmit}>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register