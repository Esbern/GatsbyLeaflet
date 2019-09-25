import React from "react"
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'


var defaultGeoJSON = {"type": "FeatureCollection", "features": []};

class MyMap extends React.Component {


  render() {
    const position = [this.props.lat, this.props.lng]
    return (
      <Map style={{ height: this.props.mapHight }} center={position} zoom={this.props.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={this.props.GeoJSON} />

      </Map>
    )
  }
}
MyMap.defaultProps = {
    lat: 55.65321,
    lng: 12.1412,
    zoom: 17,
    mapHight : 600
    GeoJSON: defaultGeoJSON
  }
export default MyMap