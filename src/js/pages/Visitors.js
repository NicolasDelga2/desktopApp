import React, { useState, useEffect } from "react";
import Datatable from "../components/Datatable/Datatable";
import "./pagesStyle/style.css";

const Visitors = () => {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchColumns, setSearchColumns] = useState(["lastname", "name"]);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8080/api/v1/visitor/visitors")
      .then((response) => response.json())
      .then((json) => setData(json));
    setLoading(false);
  }, []);

  const columns = data[0] && Object.keys(data[0]);

  function search(rows) {
    return rows.filter((row) =>
      columns.some(
        (column) =>
          row.name.toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  }
 
  return (
    <div>
     
      <div>
        <input
          type="text"
          className="browser-input"
          onChange={(e) => setQ(e.target.value)}
          value={q}
          placeholder="Buscar"
        />
        {
          columns && columns.map((column,index) => <label key={index}>
            <input type="checkbox" 
            checked={searchColumns.includes(column)} 

            onChange={ (e) => {
              const checked = searchColumns.includes(column)
              setSearchColumns((prev) => 
              checked 
              ? prev.filter((sc) => sc !== column)// Quitar columna
              : [...prev, column]) // Agregar columna 

            }} />
            {column}</label>)
        }
      </div>
      <div>
        {loading ? (
          <h1 className="Loader">Loading ....</h1>
        ) : (
          <Datatable data={search(data)} />
        )}
      </div>
    </div>
  );
};

export default Visitors;
