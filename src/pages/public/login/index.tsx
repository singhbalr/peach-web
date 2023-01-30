import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setLoggedInState, setPassword, setUsername } from './rx/reducer';

interface Props {}

const LoginForm: React.FC<Props> = () => {
  const [username, setUsernameVal] = useState('');
  const [password, setPasswordVal] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();

  const validateUsername = (value: string) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(value);
  };

  const validatePassword = (value: string) => {
    return value.length >= 8;
  };
  const onSubmit = (
    _username: string,
    _password: string,
    _rememberMe: boolean
  ) => {
    dispatch(setUsername(username));
    dispatch(setPassword(password));
    dispatch(setLoggedInState(true));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Clicked submit');
    const isUsernameValid = validateUsername(username);
    const isPasswordValid = validatePassword(password);

    if (isUsernameValid && isPasswordValid) {
      setUsernameError('');
      setPasswordError('');
      onSubmit(username, password, rememberMe);
    } else {
      if (!isUsernameValid) {
        setUsernameError('Invalid email address');
        console.log('Invalid email address');
      }
      if (!isPasswordValid) {
        setPasswordError('Password must be at least 8 characters long');
        console.log('Invalid email address');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Email:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsernameVal(event.target.value)}
        />
        {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPasswordVal(event.target.value)}
        />
        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
      </div>
      <div>
        <label htmlFor="rememberMe">Remember me:</label>
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={(event) => setRememberMe(event.target.checked)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
