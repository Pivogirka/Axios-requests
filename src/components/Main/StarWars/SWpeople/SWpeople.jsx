import { SWimageURLs } from "../../../../api/constants/SWimageURLs";
import { swService } from "../../../../api/sw-service";
import { SWtemplate } from "../SWtemplate";

function SWpeople() {
    function info(info) {
        return (
            <>
                <h3>{info.name}</h3>
                <ul>
                    <li>Gender: {info.gender}</li>
                    <li>Birth Year: {info.birth_year}</li>
                    <li>Eye color: {info.eye_color}</li>
                </ul>
            </>
        );
    }

    return <SWtemplate fetchData={swService.getSWpeople} imgURL={SWimageURLs.PEOPLE} infoTemplate={info} />;
}

export { SWpeople };
