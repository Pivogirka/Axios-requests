import { SWimageURLs } from "../../../../services/constants/SWimageURLs";
import { getSWstarship } from "../../../../services/sw-service";
import { SWtemplate } from "../SWtemplate";

function SWstarships() {
  function info(info) {
    return (
      <>
        <h3>{info.name}</h3>
        <ul>
        <li>Cost in credits: {info.cost_in_credits}</li>
        <li>Starship class: {info.starship_class}</li>
        <li>Crew: {info.crew}</li>
        </ul>
      </>)
    } 
  
  return (
    <SWtemplate
      fetchData={getSWstarship}
      imgURL={SWimageURLs.STARSHIPS}
      infoTemplate = {info}
    />
  )
}

export {SWstarships}