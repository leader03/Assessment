import { useQuery } from "@tanstack/react-query";
import { ErrorToast } from "../components/common/toast";
import { getTableData } from "../services/tabledata";


export const useGetTableDataQuery = () => useQuery(['tabledata'], () => getTableData(), {
    onError: (err: { message: string }) => {
        ErrorToast(err.message);
    },
});