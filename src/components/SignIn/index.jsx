import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import './style.scss';
import {
  loginRequest,
} from '../../redux/user/user.actions';

function SignIn() {
  const dispatch = useDispatch();

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginRequest({ email, password }));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={email}
          type="email"
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          value={password}
          type="password"
          handleChange={handleChange}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">sign in</CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn
          >
            sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
