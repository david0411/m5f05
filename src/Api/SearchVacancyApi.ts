import axios from "axios";
import {ParkingVacancyData} from "../data/ParkingVacancyData.ts";

export const getParkingVacancyInfo = async (vehicleType:string) => {
    try {
        const apiUrl = `https://api.data.gov.hk/v1/carpark-info-vacancy?data=vacancy&vehicleTypes=${vehicleType}`
        const response = await axios.get<ParkingVacancyData>(apiUrl)
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

