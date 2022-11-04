const base = require('./base')
const { landEndpoint } = require('../config').apiConfig

const getParcels = async (sbi) => {
  const url = `${landEndpoint}LandParcels/MapServer/0/query?where=SBI=${sbi}&outFields=*&outSR=27700&f=geojson`
  const parcels = await base.get(url)
  return parcels
}

module.exports = {
  getParcels
}
