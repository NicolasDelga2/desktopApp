import React from 'react'
import './style.css'

const Modal = ({modalIsActive}) => {
    const [values, setValues] = useState({id:'',
                                      name:'', 
                                      lastname:'',
                                      nationality:'', 
                                      description:'',
                                      field:''})

    const handleSubmit =  (e) => {
      e.preventDefault();
      console.log(values);
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({...values,[name]:value})      
    }

    return (
        <div className={`${modalIsActive ? "is-active modal-container" : "modal-container none"}`}>
          <div className="modal-header">
            <span onClick={() => setModalIsActive(!modalIsActive)}>x</span>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <input type="text" name="id" onChange={handleInputChange} />
              <input type="text" name="name" onChange={handleInputChange}/>
              <input type="text" name="lastname" onChange={handleInputChange}/>
              <input type="text" name="nationality" onChange={handleInputChange}/>
              <input type="text" name="field" onChange={handleInputChange}/>
              <input type="text" name="description" onChange={handleInputChange}/>
              <button type="submit">Insertar</button>
            </form>
          </div>
          <div className="modal-footer">
            <button onClick={() => setModalIsActive(!modalIsActive)}>
              Cancelar
            </button>
          </div>
        </div>
    )
}

export default modal;
