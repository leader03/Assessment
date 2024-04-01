import React, { useEffect, useMemo, useState } from "react";
import { useGetGraphDataQuery } from "../../queries/graphDataQuery";
import ReactApexChart from "react-apexcharts";
import Loader from "../../components/common/Loader";
import Data from "../../sampleData/data";

export const candleStickOptions: any = {
  chart: {
    type: "candlestick",
  },
  title: {
    text: "CandleStick Chart",
    align: "left",
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
};
export const formatStockData = (stockData: any) => {
  const formattedData: any = [];

  Object.entries(stockData)
    .slice(0, 20)
    .forEach(([key, value]: [any, any]) => {
      formattedData.push({
        x: key,
        y: [
          value["1. open"],
          value["2. high"],
          value["3. low"],
          value["4. close"],
        ],
      });
    });
  return formattedData;
};
const GraphData = () => {
  const [tableRow, setTableRow] = useState<any[]>([]);

  const { data: graphData, isLoading, refetch } = useGetGraphDataQuery();

  useMemo(() => {
    setTableRow(Data?.["Weekly Adjusted Time Series"]);
  }, [graphData?.data]);

  const seriesData = useMemo(() => formatStockData(tableRow), [tableRow]);

  useEffect(() => {
    refetch
  },[graphData?.data?.["Weekly Adjusted Time Series"]])

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <ReactApexChart
        series={[
          {
            data: seriesData,
          },
        ]}
        options={candleStickOptions}
        type="candlestick"
      />
    </>
  );
};

export default GraphData;
