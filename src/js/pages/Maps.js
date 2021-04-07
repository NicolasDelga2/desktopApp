import React from 'react'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'

import MapView from '../components/map/MapView.js'
const Maps = () => {
    return (
      <div className="maps-container">
        <div className="data-container">
          <p>Agregar Mapa</p>
          <p>Archivo jGson</p>
          <p>
            Dibujo y impresion de mapa marca de poligonos y vectores Comparacion
            de mapas satelitales
          </p>
        </div>
        <MapView />
      </div>
    );
}

export default Maps;
