import React, { useState } from 'react';
import './style.css'
import * as FaIcons  from "react-icons/fa";
import Modal from '../modal/Modal'

const Datatable = ({data}) => {
    const [modalIsActive, setModalIsActive] = useState(false);

    const columns = data[0] && Object.keys(data[0]);

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
                    <button className="btn-edit">
                      <FaIcons.FaEdit />
                    </button>
                  </td>
                  <td className="td">
                    <button className="btn-info">
                      <FaIcons.FaInfoCircle />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
            <Modal modalIsActive={modalIsActive}/>
      </>
    );
}

export default Datatable;