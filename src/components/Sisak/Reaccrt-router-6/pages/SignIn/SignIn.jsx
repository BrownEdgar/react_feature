import React, { useState } from 'react';

import './SignIn.scss'

export default function SignIn() {
  const [email, setEmail] = useState('');
	const [information, setInformation] = useState(false);
  const [password, setPassword] = useState('');

	const handleSignInSubmit = (e) => {
		e.preventDefault();
		const {email, password} = e.target;
		setInformation(true)
		setTimeout(setInformation, 5000, false );
		e.target.reset()
		}
  return (
    <div className='container'>
			<div className={`information ${information ? 'show' : ''}`}>
				<p>Դուք հաջողությամբ մուտք գործեցիք մեր կայք!</p>
			</div>
      <h1>Sign In</h1>
      <form onSubmit={handleSignInSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
