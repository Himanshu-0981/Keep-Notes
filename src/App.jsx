import React, { useState } from 'react';
import './App.css'
import Header from './components/Header'

function App() {

  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [msg, setMsg] = useState('')
  const [data, setData] = useState([]);

  const handleSubmit = () => {
    setData([{fName, lName, msg}], ...data)
    // console.log([fName, lName, msg], ...data);
    setFName('')
    setLName('')
    setMsg('')
  }

  return (
    <div className="App">
      <Header />
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder='first name'
          className='input-text'
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />
        <input
          type="text"
          placeholder='last name'
          className='input-text'
          value={lName}
          onChange={(e) => setLName(e.target.value)}
        />
        <br />
        <textarea
          placeholder='message'
          value={msg}
          onChange={(e) => setMsg(e.target.value)}>
        </textarea>
        <br />
        <input
          type="submit"
          value="Done"
          className='submit-btn'
          onClick={handleSubmit}
        />
      </form>

        {
          data.map((e,i) => {
            console.log(e);
            return (
              <div key={i} className='result-container'>
              <div className='result-box'>
                <h3>Name : {e.fName + " " + e.lName}</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, repellat.</p>
              </div>
            </div>
            ) 
          })
        }

    </div>
  )
}

export default App
