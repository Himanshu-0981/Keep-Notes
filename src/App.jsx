import React, { useState } from 'react';
import './App.css'
import Header from './components/Header'
import Output from './components/Output';

function App() {
  const [form, setForm] = useState(
    {
      fName: '',
      lName: '',
      msg: '',
      bgColor: '',
      textColor: '',
    });

  const [data, setData] = useState([]);

  const handleSubmit = () => {
    if ((form.fName && form.lName && form.msg) === '') {
      alert('input field is empty')
      return
    }else {
      setData([form, ...data],)
      setForm({ fName: "", lName: "", msg: "" })
    }
  }

  const keyPress = (event) => {
    if(event.key == 'Enter'){
      handleSubmit()
    }
  }

  return (
    <div className="App">
      <Header />
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder='first name'
          className='input-text'
          value={form.fName}
          onChange={(e) => setForm({ ...form, fName: e.target.value })}
          onKeyPress={(e)=>keyPress(e)}
        />
        <input
          type="text"
          placeholder='last name'
          className='input-text'
          value={form.lName}
          onChange={(e) => setForm({ ...form, lName: e.target.value })}
          onKeyPress={(e)=>keyPress(e)}
        />
        <br />
        <textarea
          placeholder='message'
          value={form.msg}
          onChange={(e) => setForm({ ...form, msg: e.target.value })}
          onKeyPress={(e)=>keyPress(e)}
          >
        </textarea>
        <br />
        <div className='color-pallet-container'>
          <div className='bg-color-pallet'>
            <p>Choose Background color </p>
            <input type="color"
              value={form.bgColor}
              onChange={(e) => setForm({ ...form, bgColor: e.target.value })}
              onKeyPress={(e)=>keyPress(e)}
            />
          </div>
          <div className='text-color-pallet'>
            <p>Choose Text color </p>
            <input type="color"
              value={form.textColor}
              onChange={(e) => setForm({ ...form, textColor: e.target.value })}
              onKeyPress={(e)=>keyPress(e)}
            />
          </div>
        </div>
        <br />
        <input
          type="submit"
          value="Done"
          className='submit-btn'
          onClick={handleSubmit}
        />
      </form>
      <div className='result-container'>
        <Output data={data} state={setData} />
      </div>

    </div>
  )
}

export default App

