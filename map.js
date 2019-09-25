 /*  This component can be called with the following properties
*    lat: 55.65321   The map center latitude
*    lng: 12.1412    The map center longitude
*    zoom: 17        The map zoom level
*    mapHight : 600  The height of the map div
*    geoJSON: {"type": "FeatureCollection", "features": []}   The geoJSON to display on the map
*   The component is designed for use in Gatsby.js 
*/

import React from "react"
import { Map, TileLayer, GeoJSON } from 'react-leaflet'

class MyMap extends React.Component {
  render() {
    const position = [this.props.lat, this.props.lng]
    return (
      <Map style={{ height: this.props.mapHight }} center={position} zoom={this.props.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={this.props.geoJSON} />

      </Map>
    )
  }
}
MyMap.defaultProps = {
    lat: 55.65321,
    lng: 12.1412,
    zoom: 17,
    mapHight : 600,
    geoJSON: {"type": "FeatureCollection", "features": []}
  }
export default MyMap
