import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../firebase/firebase-auth';
import { useRouter } from 'next/router';

const CreateNewAccout = () => {
  const [regesterEmail, setRegesterEmail] = useState('');
  const [regesterPassword, setRegesterPassword] = useState('');
  const route = useRouter()
  const regester = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        regesterEmail,
        regesterPassword
      );
      if (res) {
        route.push('/');
      }
      setRegesterEmail('');
      setRegesterPassword('');
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
            <h1>Sing Up</h1>
            <form action="" onSubmit={regester}>
              <label htmlFor="" id="input-one">
                E-mail
              </label>
              <input
                type="email"
                value={regesterEmail}
                onChange={(e) => setRegesterEmail(e.target.value)}
              />
              <label htmlFor="">Password</label>
              <input
                type="password"
                value={regesterPassword}
                onChange={(e) => setRegesterPassword(e.target.value)}
              />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Labore, aspernatur.
              </p>
              <button type="submit" id="countinue-btn">
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewAccout;
