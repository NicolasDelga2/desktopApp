import React from 'react'
import L from 'leaflet';
delete L.Icon.Default.prototype.getIconUrl;
import {Marker} from 'react-leaflet';

const MarkerPoint = (props) => {
    const {places} = props;
    let defaultIcon = new L.icon({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl:require('leaflet/dist/images/marker-icon.png'),
        shadowUrl:require('leaflet/dist/images/marker-shadow.png'),
    })

    const markers = places.map((place, index) => {
       return (
        <Marker key={index} position={place.geometry} icon={defaultIcon} />
    )});

    console.log(markers);
    return markers;
}
export default MarkerPoint;
