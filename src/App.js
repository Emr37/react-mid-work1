import axios from 'axios';
import { useState } from 'react';
import './App.css';




function App() {
  const [userId, setUserId] = useState("");
  
  const getData = async(_userId) => {
    const { data: users} = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const { data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    console.log(users);
    console.log(posts);
  }



  return (
    <div className="App">

      Hello World
      <br/>
      <input onChange={(e) => setUserId(e.target.value)} placeholder="Please write user id"></input>
      <br/>
      <button onClick={getData}>Get Data</button>
      
    </div>
  );
}

export default App;
