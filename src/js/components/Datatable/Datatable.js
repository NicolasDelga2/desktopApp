import React from 'react';
import './style.css'

const Datatable = ({data}) => {
    const columns = data[0] && Object.keys(data[0]);
    return (
      <table cellSpacing={0} cellPadding={0} className='table'>
        <thead>
          <tr className='tr' id='header'>
            {data[0] &&
              columns.map((heading, index) => <th className='th' key={index}>{heading}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
              return (
              <tr className='tr' key={row.id}>
                <td className='td'>{row.userId}</td>
                <td className='td'>{row.id}</td>
                <td className='td'>{row.title}</td>
                <td className='td'>{row.completed}</td>
                <button>Editar</button>
                <button>Detalles</button>
              </tr>)
              ;
          })}

        </tbody>
      </table>
    );
}

export default Datatable;