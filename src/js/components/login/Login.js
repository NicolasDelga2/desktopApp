import React,{useState} from 'react';
import './style.css'

function Login({LoginFunction, error}) {

 const [details, setDetails] = useState({ username: "", password: "" });

 const submitHandler = (e) => {
   e.preventDefault();
   LoginFunction(details);
 };

  return (
    <div className="container">
      <h2>Nombre del Area Natural</h2>
      <div className="user-picture"></div>
      <form  onSubmit={submitHandler}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Usuario"
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
            value={details.username}
            autoFocus
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Contraseña"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>

        <div className="form-group">
          <label className='remember-me' htmlFor="">Recordarme</label>
          <input type="checkbox" className="form-checkbox" />
        </div>
        <h3 className='error'>{error}</h3>
        <div className="form-group">
          <button type="submit" className="btn btn-info btn-block">
            Ingresar
          </button>
        </div>
        <div className="form-group">
          <button type="button" className="btn btn-info btn-block">
            Crear usuario
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;