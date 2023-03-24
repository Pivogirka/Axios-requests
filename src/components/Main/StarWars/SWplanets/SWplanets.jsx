import { SWimageURLs } from "../../../../services/constants/SWimageURLs"
import { getSWplanet } from "../../../../services/sw-service"
import { SWtemplate } from "../SWtemplate"

function SWplanets() {
  function info(info) {
    return (
      <>
        <h3>{info.name}</h3>
        <ul>
        <li>Climate: {info.climate}</li>
        <li>Terrain: {info.terrain}</li>
        <li>Population: {info.population}</li>
        </ul>
      </>)
  } 

  return (
    <SWtemplate
      fetchData={getSWplanet}
      imgURL={SWimageURLs.PLANETS}
      infoTemplate = {info}
    />
  )
}

export {SWplanets}