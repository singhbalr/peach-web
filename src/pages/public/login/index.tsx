import Image from 'next/image';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setLoggedInState, setPassword, setUsername } from './rx/reducer';
import styles from './styles.module.scss';

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
    <div>
      <div className={styles.login_container}>
        <p className={styles.login_title}>Login </p>
        <p className={styles.login_description}>login to your account </p>
        <div
          className={styles.location}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            className={styles.location_img}
            src="/assets/images/marker.png"
            alt="map"
            width="11"
            height="12"
          />
          <p className="font-sans font-medium">Bali, Indonesia</p>
        </div>
        <div className={styles.login_wrapper}>
          <input
            className={styles.email}
            placeholder="Email"
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsernameVal(event.target.value)}
          />
          {/* {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>} */}
          <input
            className={styles.password}
            placeholder="Password"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPasswordVal(event.target.value)}
          />
          {/* {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>} */}

          <p className={styles.forgot_password} htmlFor="rememberMe">
            forgot your password?
          </p>
        </div>
        <a className={styles.button_login} type="submit">
          Login
        </a>
        <p className={styles.description}>
          Don’t have an account ?{'  '}
          <a className={styles.button_signup}>Sign Up </a>
        </p>
      </div>
      <div className={styles.footer}>
        <div className={styles.bottom_line}></div>
        <Image
          className={styles.peach_img}
          src="/assets/images/logo-peach.svg"
          alt="peach bioverse logo"
          width="826"
          height="111"
        />
      </div>
    </div>
  );
};

export default LoginForm;
