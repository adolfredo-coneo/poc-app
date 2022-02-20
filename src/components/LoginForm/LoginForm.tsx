import React, { useEffect, useReducer, useState } from 'react';

import classes from './LoginForm.module.css';
import loginDataReducer from './LoginReducer';

type LoginFormProps = {
  onSubmit: (email: string, password: string) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [message, setMessage] = useState('');
  const [loginData, dispatchLoginData] = useReducer(loginDataReducer, {
    email: '',
    emailIsValid: false,
    password: '',
    passwordIsValid: false,
    formIsValid: false,
  });
  const { emailIsValid, passwordIsValid, formIsValid } = loginData;

  useEffect(() => {
    dispatchLoginData({
      type: 'FORM_VALIDATION',
    });
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    dispatchLoginData({
      type: 'EMAIL_USER_INPUT',
      payload: event.currentTarget.value,
    });
  };

  const passwordChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    dispatchLoginData({
      type: 'PASSWORD_INPUT',
      payload: event.currentTarget.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formIsValid) {
      onSubmit(loginData.email, loginData.password);
    } else {
      let errorMessage = '';
      if (!emailIsValid && !passwordIsValid)
        errorMessage = 'Email and password are not valid';
      else if (!emailIsValid) errorMessage = 'Email is not valid';
      else if (!passwordIsValid) errorMessage = 'Password is not valid';
      setMessage(errorMessage);
    }
  };

  return (
    <div className={classes['form-container']}>
      <h1>POC App</h1>
      <h2>Access you account</h2>
      <section>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={`${classes.control}`}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={emailChangeHandler}
              required
            />
          </div>
          <div className={`${classes.control}`}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={passwordChangeHandler}
              required
            />
          </div>
          {message && <p>{message}</p>}
          <div className={`${classes.control}`}>
            <button type="submit">Login</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default LoginForm;
