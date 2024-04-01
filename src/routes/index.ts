import GraphData from "../pages/GraphData";
import TableData from "../pages/TableList";


const coreRoutes = [
    {
        path: '/',
        title: 'Graph Data',
        component: GraphData
    },
    {
        path: '/tablelist',
        title: 'Table List',
        component: TableData
    }
]

const routes = [...coreRoutes];
export default routes;