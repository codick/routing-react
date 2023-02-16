import React, { useState } from 'react'

export default function Form(props) {

    const [logUser, setLogUser] = useState({username:'', password_user: ''})

    function Login(event) {
        event.preventDefault();
        for (let acc of props.accounts) {
            if (logUser.username === acc.username && logUser.password_user === acc.password_user) {
                localStorage.setItem('username', logUser.username)
                localStorage.setItem('password_user', logUser.password_user)
                props.setUser(logUser)
                setLogUser({username:'', password_user: ''})
            }
        }
    }
  return <div>
    {props.user === null ?
    <form onSubmit={(event) => Login(event)}>
        Name:<input type="text" value={logUser.username} onChange={event => setLogUser({username: event.target.value, password_user: logUser.password_user})} /> <br />
        Password:<input type="password" value={logUser.password_user} onChange={event => setLogUser({username: logUser.username, password_user: event.target.value})} />
        <button>Log in</button>
    </form> :
    <button onClick={() => {props.setUser(null); localStorage.setItem("username", null); localStorage.setItem("password_user", null)}}>Log out</button>
    }
  </div>
}
