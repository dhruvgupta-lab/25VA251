import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function showData() {
    if (name === '' || email === '' || password === '') {
      alert('Please fill all fields');
    } else {
      alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
    }
  }

  return (
    <div className="App">
      <h2>Registration Form</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={showData}>Submit</button>
    </div>
  );
}

export default App;
