import React, { useState } from 'react';

import "./SignUp.scss";

export default function SignUp() {
	const [information, setInformation] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

 	const handleSignUpSubmit = (e) => {
		e.preventDefault();
		const {email, password, confirmpassword} = e.target;
		setInformation(true)
		setTimeout(setInformation, 5000, false );
		e.target.reset()
		}

  return (
    <div className='container'>
			<div className={`information ${information ? 'show' : ''}`}>
				<p>Դուք հաջողությամբ գրանցվել եք մեր կայքում!</p>
			</div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUpSubmit}>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

