import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
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
    <div className="grid grid-cols-2 gap-4 h-48">
      <div className='h-screen'>
        <form onSubmit={handleSubmit} >
        <div className='mt-32' style={{
          display: "flex",
          justifyContent: "center",
        }}>
          <Image src="/assets/images/logo.png" alt="logo" width="40" height="40" />
        </div>
        <div className='mt-6'>
          <p className='text-2xl font-sans text-center' style={{ color: '#E16B8C'}}><strong>Login</strong> </p>
        </div>
        <div className='mt-1'>
          <p className='font-sans text-center' style={{ color: '#E16B8C'}}><small>login to your account</small> </p>
        </div>
        <div className='mt-1' style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Image src="/assets/images/marker.png" alt="map" width="11" height="12" />
          {"  "}
          <p className='font-sans' style={{ color: '#E16B8C'}}>
            <small>Bali, Indonesia</small> 
          </p>
        </div>
        <div className="flex mx-40 border-b border-pink-500 py-2">
          <input
            className="appearance-none bg-transparent border-none placeholder-pink-500 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"  
            placeholder="Email" 
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsernameVal(event.target.value)}
          />
          {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
        </div>
        <div className="flex mx-40 border-b border-pink-500 py-2">
          <input
            className="appearance-none bg-transparent border-none placeholder-pink-500 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"  
            placeholder="Password" 
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPasswordVal(event.target.value)}
          />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </div>
        <div className='mx-40 text-right'> 
          <label style={{ color: '#E16B8C'}} htmlFor="rememberMe"><small>forgot your password?</small> </label>
          {/* <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
          /> */}
        </div>
        <div className='text-center mt-12'>
          <button 
            className="bg-pink-500 hover:bg-pink-700 text-white py-2 px-4 rounded-full btn w-1/2" 
            type="submit" 
            style={{ color: '#ffffff'}}
            >Login</button>
        </div>
       <div className='text-center mt-12'>
          <p className='-mb-12'><small>Don’t have an account ? <strong style={{ color: '#E16B8C'}}>Sign Up </strong> </small></p>
       </div>
        </form>
      </div>
      <div className='h-screen' style={ {backgroundColor: "#F596AA"}}>
        
      </div>
    
    </div>
  );
};

export default LoginForm;
