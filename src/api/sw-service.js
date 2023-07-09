import axiosInstance from "./axiosInstance";

const swService = {
    async getSWpeople(peopleNumber) {
        return (await axiosInstance.get(`people/${peopleNumber}`)).data;
    },
    async getSWplanet(planetNumber) {
        return (await axiosInstance.get(`planets/${planetNumber}`)).data;
    },
    async getSWstarship(starshipNumber) {
        return (await axiosInstance.get(`starships/${starshipNumber}`)).data;
    },
};

export { swService };
