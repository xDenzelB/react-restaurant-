import { useState } from 'react';
import { signIn, signUp } from './services/fetch-Utils';

export default function AuthPage({ setUser }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signIn(email, password);

    setUser(user);
  }
  async function handleSignUp() {

    const user = await signUp(email, password);

    setUser(user);
  }
  return (
    <div className='auth-page'>
      <h1>Restaurant Inventory</h1>
      <form onSubmit={handleSignIn}>
        <label>
        Email 
          <input value={email} onChange={e => setEmail(e.target.value)} required type='email' name='email' />
        </label>
        <label>
            Password
          <input value={password} onChange={e => setPassword(e.target.value)} required type='password' name='password' />
        </label>
        <button>Sign In</button>
        <button onClick={handleSignUp} type='button'>Sign Up</button>
      </form>
    </div>
  );
}
