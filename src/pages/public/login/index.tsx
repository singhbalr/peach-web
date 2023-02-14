import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { setLoggedInState, setPassword, setUsername } from './rx/reducer';
import { LoginHeader } from 'components/layouts/LoginHeader';

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
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
       <LoginHeader /> 
          <div className='mt-32'>
            <p className='text-2xl font-sans text-center font-semibold'>Login </p>
          </div>
          <div className='mt-1'>
            <p className='font-sans text-center font-light text-sm'>login to your account </p>
          </div>
          <div className='mt-1' style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Image src="/assets/images/marker.png" alt="map" width="11" height="12" />
            {"  "}
            <p className='font-sans font-medium'>
              Bali, Indonesia
            </p>
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex mx-10 border-b border-black py-2 mt-6">
              <input
                className="appearance-none bg-transparent border-none placeholder-black text-gray-700  leading-tight focus:outline-none"  
                placeholder="Email" 
                type="text"
                id="username"
                value={username}
                onChange={(event) => setUsernameVal(event.target.value)}
              />
              {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
            </div>
            <div className="flex mx-10 border-b border-black py-2 mt-6">
              <input
                className="appearance-none bg-transparent border-none placeholder-black text-gray-700  leading-tight focus:outline-none "  
                placeholder="Password" 
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPasswordVal(event.target.value)}
              />
              {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
            </div>
            <div className='mx-10 mt-1 text-right mt-2 mb-4'> 
              <label className='font-light text-sm'  htmlFor="rememberMe">forgot your password?</label>
            </div>
          </div>
          <div className='text-center mt-12'>
            <button 
              className="bg-white outline outline-1 outline-gray-400 hover:bg-gray-700 font-bold py-2 px-52 rounded-full btn " 
              type="submit" 
              >Login
            </button>
          </div>
        <div className='text-center mt-12'>
            <p className='-mb-12'><small>Don’t have an account ? <strong >Sign Up </strong> </small></p>
        </div>
    </div>
  );
};

export default LoginForm;
