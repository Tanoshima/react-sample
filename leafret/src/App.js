import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [35.3622222, 138.7313889]

function PopupExample() {
  return (
    <MapContainer center={position} zoom={13}>

      <TileLayer
        attribution="<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
        url="https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default PopupExample