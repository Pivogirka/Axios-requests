import axios from "axios";

// ! create axiousInstance

async function getSWpeople(peopleNumber) {
    try {
        const info = await axios.get(
            "https://swapi.dev/api/people/" + peopleNumber.toString(),
        );
        return info.data;
    } catch (error) {
        throw error;
    }
}

async function getSWplanet(planetNumber) {
    try {
        const info = await axios.get(
            "https://swapi.dev/api/planets/" + planetNumber.toString(),
        );
        return info.data;
    } catch (error) {
        throw error;
    }
}

async function getSWstarship(starshipNumber) {
    try {
        const info = await axios.get(
            "https://swapi.dev/api/starships/" + starshipNumber.toString(),
        );
        return info.data;
    } catch (error) {
        throw error;
    }
}

export { getSWpeople, getSWplanet, getSWstarship };
