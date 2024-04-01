import axios from "axios";
import { BASE_URL } from "../lib/axiosInterceptor";

export const getTableData =  () => {
    return axios.get(`${BASE_URL}query?function=MARKET_STATUS&apikey=J3XI5PN4AAGV7ORL`)
}