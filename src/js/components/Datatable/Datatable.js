import React, { useState } from 'react';
import './style.css'
import * as FaIcons  from "react-icons/fa";
import Modal from '../modal/modal';

const Datatable = ({data, setData}) => {
    const [modalIsActive, setModalIsActive] = useState(false);
    const [editValues, setEditValues] = useState({});
    const setModal = () => {
      setModalIsActive(!modalIsActive);
    }
    
    const columns = data[0] && Object.keys(data[0]);

    const addOrEdit = async (linkObject) => {
      if (linkObject.id > 0) {
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(linkObject),
        };
        fetch("http://localhost:8080/api/v1/visitor/update", requestOptions)
          .then((res) => res.json())
          .catch((err) => console.log("error", err))
          .then((response) => console.log("success", response));

      } else {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(linkObject),
        };
        fetch("http://localhost:8080/api/v1/visitor/save", requestOptions)
          .then((res) => res.json())
          .catch((err) => console.log("error", err))
          .then((response) => console.log("success", response));
      }
      setModalIsActive(!modalIsActive);
      setData(data);
    };

    const setValuesEditModal = async (id) => {
      const visitorValues = {};
      fetch(`http://localhost:8080/api/v1/visitor/getVisitor/${id}`)
      .then((response) => response.json())
      .then((json) =>console.log(json));
      setModalIsActive(true);
    }


    const deleteVisitor = async (id) => {
      if (window.confirm("Seguro que quiere eliminar este registro?")) {
        const requestOptions = {
          method: "DELETE",
        };
        fetch(
          `http://localhost:8080/api/v1/visitor/delete/${id}`,
          requestOptions
        )
          .then((res) => res.json())
          .catch((err) => console.log("error", err))
          .then((response) => console.log("success", response));
          setData(data)
      }
    };

    return (
      <>
        <button
          className="btn-new-visitor"
          onClick={() => setModalIsActive(!modalIsActive)}
        >
          Nuevo Visitante
        </button>
        <table cellSpacing={0} cellPadding={0} className="table">
          <thead>
            <tr className="tr" id="header">
              {data[0] &&
                columns.map((heading, index) => (
                  <th className="th" key={index}>
                    {heading}
                  </th>
                ))}
              <th>Editar</th>
              <th>Detalles</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              return (
                <tr className="tr" key={row.id}>
                  <td className="td">{row.id}</td>
                  <td className="td">{row.name}</td>
                  <td className="td">{row.lastname}</td>
                  <td className="td">{row.nationality}</td>
                  <td className="td">{row.description}</td>
                  <td className="td">{row.field}</td>
                  <td className="td">
                    <button className="btn-edit" onClick={() => setValuesEditModal(row.id)}>
                      <FaIcons.FaEdit />
                    </button>
                  </td>
                  <td className="td">
                    <button className="btn-info">
                      <FaIcons.FaInfoCircle />
                    </button>
                  </td>
                  <td className="td">
                    <button className="btn-delete" onClick={() => deleteVisitor(row.id)}>
                      <FaIcons.FaDAndD />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
            <Modal  
            modalIsActive={modalIsActive} 
            setModal={setModal} 
            addOrEdit={addOrEdit}
            />
      </>
    );
}

export default Datatable;