import L from "leaflet";
import iconSvg from '../../../assets/location.png';
const IconLocation = new L.icon({
  iconUrl: iconSvg,
  iconRetinaUrl:iconSvg,
  popupAnchor:  [-0, -0],
  iconSize: [32,45],  
  className: "leaflet-venue-icon",
});
export default IconLocation;
