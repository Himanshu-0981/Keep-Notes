import React, { useState } from 'react';
import './App.css'
import Header from './components/Header'

function App() {
  const [form,setForm] = useState({ fName:"",lName:"",msg:"" });
  const [data, setData] = useState([]);

  const handleSubmit = () => {
    console.log(form);
    if((form.fName&& form.lName && form.msg)===""){
      return  
    }
     setData([ form , ...data],)
      setForm({ fName:"",lName:"",msg:""})
  }

  const handleDelete = (e) => {
      const filterFun = data.filter( (elem,index) => e!=index)
      setData(filterFun)
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
          onChange={(e) => setForm({...form,fName:e.target.value})}
        />
        <input
          type="text"
          placeholder='last name'
          className='input-text'
          value={form.lName}
          onChange={(e) => setForm({...form,lName:e.target.value})}
        />
        <br />
        <textarea
          placeholder='message'
          value={form.msg}
          onChange={(e) => setForm({...form,msg:e.target.value})}>
        </textarea>
        <br />
        <input
          type="submit"
          value="Done"
          className='submit-btn'
          onClick={handleSubmit}
        />
        <input type="color" />
      </form>
      <div className='result-container'>
      {
        data.map((elem, i) => {
          return (
            <div key={i}>
              <div className='result-box'>
                <h3 className='result-heading'>Name : {elem.fName + " " + elem.lName}</h3>
                <hr />
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

