import React, { useState } from 'react';
import './App.css'
import Header from './components/Header'

function App() {

  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [msg, setMsg] = useState('')
  const [data, setData] = useState([]);

  const handleSubmit = () => {
    if(fName===''){
      console.log('its empty ');
    }else{
      setData([{ fName, lName, msg }, ...data],)
      setFName('')
      setLName('')
      setMsg('')
    }
  }

  const handleDelete = (e) => {
    const arr = data.filter((elem,index)=>{
        return index !== e;
    })
      setData(arr)
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
      <div className='result-container'>
      {
        data.map((elem, i) => {
          return (
            <div key={i}>
              <div className='result-box'>
                <h3 className='result-heading'>Name : {elem.fName + " " + elem.lName}</h3>
                <p className='result-para'>{elem.msg}</p>
              </div>
              <button className='delete-btn' onClick={()=>handleDelete(i)}>DELETE</button>
              </div>
            
          )
        })
      }
      </div>

    </div>
  )
}

export default App

