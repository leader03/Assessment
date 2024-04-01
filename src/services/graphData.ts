import axios from "axios";
import { BASE_URL } from "../lib/axiosInterceptor";

export const getGraphData =  () => {
    return axios.get(`${BASE_URL}query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=EGE9ODG4XG0ATFV8`)
}