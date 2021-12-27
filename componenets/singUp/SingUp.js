import React, { useState } from 'react';
import { auth } from '../../firebase/firebase-auth';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { useRouter } from 'next/router';

const SingUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const hendelSingIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <div className="singup-continear">
        <div className="singup">
          <img src="logo.png" alt="logo" />
          <div className="singup-box">
            <h1>Sing in</h1>
            <form action="" onSubmit={hendelSingIn}>
              <label htmlFor="" id="input-one">
                E-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button id="btn-one" type="submit">
                Sing in
              </button>
            </form>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
              aspernatur.
            </p>
            <button type="button" onClick={() => router.push('/signin')}>
              Create your amazon account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
