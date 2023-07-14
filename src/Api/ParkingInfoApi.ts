import axios from "axios";
import {ParkingInfoData} from "../data/ParkingInfoData.ts";
export const getParkingInfo = async () =>   {
    try {
        const apiUrl = `https://api.data.gov.hk/v1/carpark-info-vacancy`
        const response = await axios.get<ParkingInfoData>(apiUrl)
        return response.data;
    }
    catch(e)    {
        console.error(e);
    }
}