import React, { Component } from 'react';
import { Map, GeoJSON} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './CovidMap.css'

const CovidMap = ({ countries }) => {
   const mapStyle = {
      fillColor: "white",
      weight:1,
      fillOpacity:1,
      color: "black",
   }
   
   const onEachCountry = (country, layer) => {
      const name = country.properties.ADMIN
      const confirmedText = country.properties.confirmedText
      layer.options.fillColor = country.properties.color
      layer.bindPopup(`${name} ${confirmedText}`)
   }

   return ( 
      <Map
         style={{height:"90vh"}}
         zoom = {2}
         center= {[20,100]}
      >
         <GeoJSON
            style={mapStyle}
            data={countries}
            onEachFeature={onEachCountry}/>
      </Map>
    );
}
 
export default CovidMap;