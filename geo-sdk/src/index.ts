import { GeoSDK } from './geo-sdk'

const geoSDK = new GeoSDK('http://localhost:3000')

const ip = '46.3.85.8'
geoSDK.getGeoInfo(ip)
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  });