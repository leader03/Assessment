import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../components/common/header/mainHeader";
import Breadcrumb from "../../components/common/breadcrumb/breadcrumb";
import SearchInput from "../../components/common/forms/searchInput";
import TableList from "../../components/table";
import Header from "../../components/TableData/tableHeader";
import { useGetTableDataQuery } from "../../queries/tabledataQuery";
import Loader from "../../components/common/Loader";

const TableData = () => {
  const [keyword, setKeyword] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const [tableRow, setTableRow] = useState<any[]>([]);
  const [filterList, setFilterList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [singleRowData, setSingleRowData] = useState<any>({});
  const navigate = useNavigate();

  const { data: tableData, isLoading } = useGetTableDataQuery();
  console.log(tableData);
  

  useMemo(() => {
    const newData = tableData?.data?.markets?.map((item: any) => {
      return {
        market_type: item.market_type,
        region: item.region,
        primary_exchanges: item.primary_exchanges,
        local_open: item.local_open,
        current_status: item.current_status,
        notes: item.notes,
      }
    })
    setTableRow(newData);
  }, [tableData?.data?.markets]);

  const breadcrumbItems = [
    { label: "Dashboard", link: "/" },
    { label: "Table", link: "/tablelist" },
  ];
  const handleKeyword = () => {};

  return isLoading ? (
    <Loader />
  ) : (
    <main className="w-full px-6  mx-auto">
      <MainHeader title="Table" />
      <Breadcrumb items={breadcrumbItems} />
      <div className="mb-4"></div>
      <div className="flex items-center justify-between pb-4">
        {/* <SearchInput keyword={keyword} onChange={handleKeyword} /> */}
        {/* <AddButton label="Add User" onClick={handleAddButton} /> */}
      </div>
      <TableList<any>
        setIsEdit={setIsEdit}
        setDeleteOpen={setIsDeleteOpen}
        setEditOpen={setIsOpen}
        tableRow={tableRow}
        header={Header}
        setSingleRowData={setSingleRowData}
      />
      {/* {!isLoading && (
          <Pagination
            page={totalPageNumber}
            setPageNo={setPageNo}
            pageNo={pageNo}
          />
        )} */}
    </main>
  );
};

export default TableData;
