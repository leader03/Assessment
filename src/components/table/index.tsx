import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PrintActions from "../common/button/printActions";
import ViewActions from "../common/button/viewActions";



type tableProps<T> = {
    header: {
      title: string;
      header: string;
    }[];
    tableRow: T[] | undefined;
    setEditOpen: (value: boolean) => void;
    setDeleteOpen: (value: boolean) => void;
    setViewOpen?: (value: boolean) => void;
    setIsEdit: (value: boolean) => void;
    setSingleRowData: (data: any) => void;
    fromTablePage?: boolean;
    fromReport?: boolean;
  };
  
  const TableList = <T extends object>({
    header,
    tableRow,
    setEditOpen,
    setDeleteOpen,
    setViewOpen,
    setIsEdit,
    setSingleRowData,
    fromTablePage = false,
    fromReport,
  }: tableProps<T>) => {
    const handleDeleteIcon = (data: T | undefined) => {
      setSingleRowData(data);
      setDeleteOpen(true);
    };
    const handleEditIcon = (data: T | undefined) => {
      setIsEdit(true);
      setSingleRowData(data);    
      setEditOpen(true);
    };
    const handleView = (data: T | undefined) => {
      setSingleRowData(data);    
      if (setViewOpen) {
        setViewOpen(true);
      }
    };
  
    return (
      <div>
        <div className="relative overflow-x-auto shadow bg-white  ">
          <table className="w-full text-sm text-left table-fixed text-gray-500 ">
            <thead>
              <tr className="text-xs font-semibold bg-gray-200 text-gray-600 tracking-wide text-left uppercase border-b ">
                {header.map((header, index) => (
                  <th key={index} scope="col" className="px-4 w-1/3 py-3">
                    {header.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <Fragment>
                {tableRow?.map((item: any, index) => {
                  return (
                    <tr
                      key={index}
                      className={`  ${item.payment_only ? 'bg-green-50 border-b  hover:bg-green-100' : 'bg-white border-b  hover:bg-gray-50'}` }
                    >
                      {header.map((header: any, id) => {
                        return (
                          <td key={id} className="px-4 py-4">
                            {header.header === "status" ? (
                              <>
                                {item.status?.toString() === "true" ? (
                                  <span className="bg-green-100 text-green-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded  uppercase">
                                    {fromTablePage ? "Available" : "Available"}
                                  </span>
                                ) : (
                                  <span className="bg-red-100 text-red-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded  uppercase">
                                    {fromTablePage ? "Occupied" : "Unavailable"}
                                  </span>
                                )}
                              </>
                            ) :
                            header.header === 'complete' ? (
                              <span
                                className={
                                  item.complete
                                    ? 'bg-green-100 text-green-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded uppercase'
                                    :
                                    item.approved ? 'bg-fuchsia-100 text-fuchsia-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded uppercase':
                                    'bg-red-100 text-red-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded uppercase'
                                }
                              >
                                {/* {item.complete ? (fromTablePage ? 'true' : 'Completed') : fromTablePage ? 'false' : 'Incomplete'} */}
                                {!item.complete ? item.approved ? item.software ? 'Incomplete' : 'Approved' : 'New' : 'Completed'}
  
                              </span>
                            ) 
                            // : 
                            //  header.header === "action" ? (
                            //   <>
                            //     {fromReport ? (
                            //       <ReportAction />
                            //     ) : (
                            //       <TableActions
                            //         handleDeleteIcon={() =>
                            //           handleDeleteIcon(item)
                            //         }
                            //         handleEditIcon={() => handleEditIcon(item)}
                            //       />
                            //     )}
                            //   </>
                            // )
                            //  : header.header === "image" ? (
                            //   <>
                            //     {item[header.header] && (
                            //       <Image
                            //         loader={() =>
                            //           `${BASE_URL}${item[header.header]}`
                            //         }
                            //         src={`localhost:8000${item[header.header]}`}
                            //         width={50}
                            //         height={50}
                            //         alt={`localhost:8000${item[header.header]}`}
                            //       />
                            //     )}
                            //   </>
                            // ) 
                            // : header.header === "photo" ? (
                            //   <>
                            //     {item[header.header] && (
                            //       <Image
                            //         loader={() =>
                            //           `${BASE_URL}${item[header.header]}`
                            //         }
                            //         src={`localhost:8000${item[header.header]}`}
                            //         width={50}
                            //         height={50}
                            //         alt={`localhost:8000${item[header.header]}`}
                            //       />
                            //     )}
                            //   </>
                            // ) 
                            : header.header === "stock" ? (
                              <>
                              <Link to={`/products/stock/${item.id}`}>
                              <span className="bg-fuchsia-100 text-fuchsia-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded  uppercase">
                                     Stock: {item.total_stock}
                                  </span>
                                  </Link>
                              </>
                            ) :header.header === "product" ? (
                              <>
                              <Link to={`/products/category/${item.id}`}>
                              <span className="bg-fuchsia-100 text-fuchsia-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded  uppercase">
                                     View
                                  </span>
                                  </Link>
                              </>
                            ) : header.header === "print" ? (
                                  <PrintActions
                                    handleDeleteIcon={() =>
                                      handleDeleteIcon(item)
                                    }
                                  orderId={item.id}
                                  />
                            ) : header.header === "detail" ? (
                              <ViewActions handleView={() => handleView(item)} />
                        ) : header.header === "customer_detail" ? (
                          <>
                          <Link to={`/customers/${item.id}`}>
                          <span className="bg-gray-100 text-gray-700 text-xs font-medium mr-2 px-2.5 py-0.5 rounded  uppercase">
                                 Details
                              </span>
                              </Link>
                          </>
                        ) : header.header === "purchase" ? (
                          <>
                          <Link to={`/parties/${item.id}`}>
                          <span className="bg-green-100 text-green-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded  uppercase">
                                 List
                              </span>
                              </Link>
                          </>
                        ) :
                            (
                              item[header.header]
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </Fragment>
              {tableRow?.length === 0 && (
                <tr className="text-lg w-full text-center py-10">
                  <td colSpan={header.length}>No data to show</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default TableList;
  