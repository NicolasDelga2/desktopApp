import React,{useState} from 'react'
import './style.css'

const Modal = ({modalIsActive, setModal, addOrEdit}) => {
    const [values, setValues] = useState({id:'',
                                      name:'', 
                                      lastname:'',
                                      nationality:'', 
                                      description:'',
                                      field:''})

    const handleSubmit =  (e) => {
      e.preventDefault();
      addOrEdit(values)
    }
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({...values,[name]:value})      
    }
    return (
      <div
        className={`${
          modalIsActive ? "is-active modal-container" : "modal-container none"
        }`}
      >
        <div className="modal-header">
          <span onClick={() => setModal()}>x</span>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="id"
              onChange={handleInputChange}
              placeholder="id"
              value={values.id}
            />
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              placeholder="Nombre"
              value={values.name}
            />
            <input
              type="text"
              name="lastname"
              onChange={handleInputChange}
              placeholder="Apellido"
              value={values.lastname}
            />
            <input
              type="text"
              name="nationality"
              onChange={handleInputChange}
              placeholder="Nacionalidad"
              value={values.nationality}
            />
            <input
              type="text"
              name="field"
              onChange={handleInputChange}
              placeholder="Campo"
              value={values.field || ''}
            />
            <input
              value={values.description}
              type="text"
              name="description"
              onChange={handleInputChange}
              placeholder="Descripcion"
            />
            <button type="submit">Insertar</button>
          </form>
        </div>
        <div className="modal-footer">
          <button onClick={setModal}>Cancelar</button>
        </div>
      </div>
    );
}

export default Modal;
