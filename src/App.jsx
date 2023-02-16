import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom'
import Form from './components/Form';
import About from './components/About';
import Products from './components/Products';

function App() {


  const initAccounts = [

    {username:'Azat', password_user:'Qwerty123'},
    {username:'Тимурище', password_user:'Qwerty123'}
  ]
  const [accounts, setAccounts] = useState(initAccounts)


  const [user, setUser] = useState(TakeUser())

  function TakeUser() {
    let username = localStorage.getItem("username")
    let password_user = localStorage.getItem("password_user")
    if (username !== 'null' && password_user !== "null") {
      return {username: username, password_user: password_user}
    } else return null
  }


  useEffect(() => {
    if (user !== null) {
      document.title = user.name
    }else document.title = "Гость"
  })


  return <div className='section'>
    <Router>
      <header className='header'>
        <div className="container">
            <ul className='list'>
              <li><Link to='/'>Main</Link></li>
              <li><Link to='/about'>About Us</Link></li>
              <li><Link to='/products'>Products</Link></li>
              <li></li>
          </ul>
        </div>
        
      </header>
      <div className="container">
            <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/' element={<Form user={user} accounts={accounts} setUser={setUser} setAccounts={setAccounts} />} />
          </Routes>
      </div>
    </Router>
  </div>
}
export default App;
