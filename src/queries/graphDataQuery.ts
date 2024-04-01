import { useQuery } from "@tanstack/react-query";
import { ErrorToast } from "../components/common/toast";
import { getGraphData } from "../services/graphData";


export const useGetGraphDataQuery = () => useQuery(['graphdata'], () => getGraphData(), {
    onError: (err: { message: string }) => {
        ErrorToast(err.message);
    },
});