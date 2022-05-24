import React, { useState } from 'react';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, resetSending, resetError] = useSendPasswordResetEmail(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const [token] = useToken(googleUser || emailUser || facebookUser || githubUser);
  let from = location.state?.from?.pathname || '/';
  let signInError;
  if (token) {
    navigate(from, { replace: true });
  }
  if (googleError || emailError || facebookError || githubError || resetError) {
    signInError = (
      <p className='mb-3 text-red-500'>
        {googleError?.message ||
          emailError?.message ||
          facebookError?.message ||
          githubError?.message ||
          resetError?.message}
      </p>
    );
  }
  if (googleLoading || emailLoading || facebookLoading || githubLoading || resetSending) {
    return <Loading />;
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    setEmail(data.email);
  };
  const resetPass = async () => {
    await sendPasswordResetEmail(email);
    alert('Sent email');
  };
  return (
    <div className='flex justify-center items-center h-[80vh] my-28'>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='text-center text-2xl font-bold'>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='Your Email'
                className='input input-ghost w-full max-w-xs text-lg border-b-1 border-t-0 border-x-0 border-gray-500'
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is Required',
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid Email',
                  },
                })}
              />
              <label className='label'>
                {errors.email?.type === 'required' && (
                  <span className='label-text-alt text-red-500'>{errors.email.message}</span>
                )}
                {errors.email?.type === 'pattern' && (
                  <span className='label-text-alt text-red-500'>{errors.email.message}</span>
                )}
              </label>
            </div>
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='Password'
                className='input input-bordered w-full max-w-xs text-lg border-b-1 border-t-0 border-x-0 border-gray-500'
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Password is Required',
                  },
                  minLength: {
                    value: 6,
                    message: 'Must be 6 characters or longer',
                  },
                })}
              />
              <label className='label'>
                {errors.password?.type === 'required' && (
                  <span className='label-text-alt text-red-500'>{errors.password.message}</span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span className='label-text-alt text-red-500'>{errors.password.message}</span>
                )}
              </label>
              <button className='mt-[-15px] mb-5 flex justify-end text-primary' onClick={resetPass}>
                Forget password?
              </button>
            </div>
            {signInError}
            <input
              className='w-full max-w-xs btn text-lg uppercase font-bold bg-primary text-black'
              type='submit'
              value='Login'
            />
          </form>
          <p className='text-center'>
            <small>
              New Hardware Tools?{' '}
              <Link className='text-primary' to='/signup'>
                Create New Account
              </Link>
            </small>
          </p>
          <div className='divider'>OR</div>
          <button onClick={() => signInWithGoogle()} className='btn btn-outline text-lg bg-primary font-bold'>
            Continue with Google
          </button>
          <button onClick={() => signInWithFacebook()} className='btn btn-outline text-lg bg-primary font-bold'>
            Continue with Facebook
          </button>
          <button onClick={() => signInWithGithub()} className='btn btn-outline text-lg bg-primary font-bold'>
            Continue with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
