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
    <div className="grid grid-cols-2 gap-4">
      <div>
        <form onSubmit={handleSubmit} >
        <div>
          <h4 style={{ color: '#E16B8C'}}>Login</h4>
          <p style={{ color: '#E16B8C'}}>login to your account</p>
          <p style={{ color: '#E16B8C'}}>Bali, Indonesia</p>
        </div>
        <div className="flex items-center border-b border-pink-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full placeholder-pink-500 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"  
            placeholder="Email" 
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsernameVal(event.target.value)}
          />
          {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
        </div>
        <div className="flex items-center border-b border-pink-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full placeholder-pink-500 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"  
            placeholder="Password" 
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
        <button 
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full" 
          type="submit" 
          style={{ color: '#ffffff'}}
          >Login</button>

        <p><small><strong>Don’t have an account ? </strong> <strong style={{ color: '#E16B8C'}}>Sign Up </strong> </small></p>
        </form>
      </div>
      <div style={ {backgroundColor: "#F596AA"}}>
        
      </div>
    
    </div>
  );
};

export default LoginForm;
