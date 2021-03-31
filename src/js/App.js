import React, {useState} from 'react';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/Login';
import './style.css'


export default function App(){
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const adminUser = [
    { username: "Nicolas", password: "Nicolas123" },
    { username: "Gysel", password: "Gysel123" },
  ];

  const LoginFunction = (details) => {
    console.log(isUser(details));
      if (isUser(details)) {
        setUser({ username: details.username, password: details.password });
      } else {
        setError("# El usuario o contraseña es incorrecto");
      }
    };
  
  const isUser = (details) => {
   return adminUser.find((admin) => admin.username === details.username && admin.password === details.password)
  }
    

  const logout = () => {
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div className="App">
      {user.username !== "" ? (
        <Dashboard name={user.username} logout={logout} />
      ) : (
        <Login LoginFunction={LoginFunction} error={error} />
      )}
    </div>
  );
}




  /*
  const LoginFunction = (details) => {
    adminUser.forEach((admin) => {
      if (
        details.username === admin.username &&
        details.password === admin.password
      ) {
        setUser({ username: details.username, password: details.password });
      } else {
        setError("# El usuario o contraseña es incorrecto");
      }
    });
  };
*/