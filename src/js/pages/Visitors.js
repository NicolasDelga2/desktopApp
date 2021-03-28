import React, {useState, useEffect} from 'react'
import Datatable from '../components/Datatable/Datatable';

const Visitors = () => {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
      setLoading(false)
  }, []);

   function search(rows) {
     const columns = rows[0] && Object.keys(rows[0]);
     return rows.filter((row) => 
       columns.some(
         (column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
       )
     );
   }
  return (
    <div>
      <h2>Registro de visitantes</h2>
      <button className="btn btn-btn-danger">New visitor</button>
      <p>
        Registro de Nuevo Visitante Tabla de Visitante Editar visitante y borrar
        visitante
      </p>
      <p>Usar Modal</p>
      <div>
        <input type="text" onChange={(e) => setQ(e.target.value)} value={q} placeholder='Buscar'/>
      </div>
      <div>
        {loading ? <h1 style={{fontSize:30}}>Loading ....</h1> :  <Datatable data={search(data)} />}
      </div>
    </div>
  );
};

export default Visitors;
