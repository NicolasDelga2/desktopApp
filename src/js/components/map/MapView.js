import React, { useEffect, useState } from "react";
import {MapContainer, TileLayer,Marker } from "react-leaflet";
import MarkerPoint from "../marker/MarkerPoint";
import "./style.css";
import {places} from '../marker/data.json';

const MapView = () => {
  const [state,setState] = useState({
    currentLocation:{lat:"52.52437",lng:"13.41053"},
    zoom:13
  })

  const getLocation =  async () => {
    fetch("https://api.ipdata.co/?api-key=test")
    .then((response) => response.json())
    .then((json) => {
      const {longitude, latitude} = json;
      const locationData = {lng:longitude, lat:latitude};
      console.log(locationData);
      setState({...state,currentLocation:locationData})});
  }

  useEffect(() => {
    getLocation()
  })
 /*
  useEffect(() => {
    var request = new XMLHttpRequest();
    request.open("GET", "https://api.ipdata.co/?api-key=test");
    request.setRequestHeader("Accept", "application/json");
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        const userData = JSON.parse(this.responseText);
        const { longitude, latitude } = userData;
        const locationData = {lng:longitude,lat:latitude};
        console.log(locationData);
        setState({...state,currentLocation:locationData});
      }
    };
    request.send();
  },[]);
*/
  let defaultIcon = new L.icon({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl:require('leaflet/dist/images/marker-icon.png'),
    shadowUrl:require('leaflet/dist/images/marker-shadow.png'),
})

  return (
    <MapContainer center={state.currentLocation} zoom={10} scrollWheelZoom={false}>
      <TileLayer 
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={state.currentLocation} icon={defaultIcon}/>
        <MarkerPoint  places={places}/>
    </MapContainer>
  );
};

export default MapView;
