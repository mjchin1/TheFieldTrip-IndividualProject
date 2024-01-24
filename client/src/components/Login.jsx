import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login({ setUser, user}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('/api/users/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      });
      if (!response.ok) {
        const result = await response.json();
        throw Error(result.message)
      }
      const result = await response.json();
      setUser(result);
      console.log(result.user_id)
      setUsername("");
      setPassword("");
    } catch (error) {
    }

  }

  return (
    <div className="loginPage">

      <form className="loginForm"onSubmit={handleSubmit}>
        <h2 className="loginHeading">Log In</h2>
        <label>
          Username:<input value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>
          Password:<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button className="submitButton"
        >Submit</button>

      </form>
      {user.user_id ? <> <h1 className="successMessage"> Welcome back, {`${user.first_name}`}!</h1>
      
        <div className="loginPageButtons">
        <button onClick={() => {
          navigate(`/account`);
        }}>Go to Account</button>

        <button onClick={() => {
          navigate(`/places`);
        }}>Back to All Places</button> 

        </div>
        
        </>
        : null}



    </div>


  );
};