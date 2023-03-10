import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { redirect} from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(email, password);

    axios.post('http://localhost:3000/auth', {
        username: email,
        password: password
    },{
        headers: {
            'Content-Type': 'application/json',
        }
    })
      .then(response => {
        setResponseData(response.data);
        return redirect('/dashboard');
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email Address" className="emailaddbox" value={email} onChange={event => setEmail(event.target.value)} />
        <input type="password" placeholder="Password" className="passaddbox" value={password} onChange={event => setPassword(event.target.value)} />
        <input type="submit" value="Sign In & Start Studying" className="test" />
      </form>
      {responseData &&
        <div>
          {responseData.user.name} - {responseData.user.email}
        </div>
      }
    </div>
  );
};

export default Login;