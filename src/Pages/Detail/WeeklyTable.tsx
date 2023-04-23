import { useState } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
import { ChartLoader } from "../../Style/ChartLoader";
import useGetWeeklyData from "../../Functions/useGetWeeklyData";

const Div = styled.div`
  margin: 20px auto 20px 0;
  font-weight: bold;
`;

export const WeeklyTable = ({ code }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const raw = useGetWeeklyData(setIsLoading, code);
  let list = [];
  let firstraw = [];
  let secondraw = [];
  let thirdraw = [];
  let fourthraw = [];
  let date = [];
  if (raw) {
    for (let i = raw.output.length - 1; i >= 0; i = i - 1) {
      firstraw.push(Number(raw.output[i].stck_oprc));
      secondraw.push(Number(raw.output[i].stck_hgpr));
      thirdraw.push(Number(raw.output[i].stck_lwpr));
      fourthraw.push(Number(raw.output[i].stck_clpr));
      date.push(raw.output[i].stck_bsop_date);
    }
  }
  list.push(
    { name: "주식 시가", data: firstraw },
    { name: "주식 최고가", data: secondraw },
    { name: "주식 최저가", data: thirdraw },
    { name: "주식 종가", data: fourthraw }
  );

  const chartData: ApexCharts.ApexOptions = {
    chart: {
      height: "350",
      type: "line",
    },
    dataLabels: { enabled: false },
    stroke: { curve: "straight" },
    title: {
      text: "Week30",
    },
    grid: {
      row: {
        colors: ["white"],
      },
    },
    xaxis: {
      categories: date,
    },
  };

  return (
    <div>
      <Div>최근 30주(Weeks)의 주가 변동</Div>
      {isLoading ? (
        <ChartLoader />
      ) : (
        <Chart options={chartData} series={list} />
      )}
    </div>
  );
};
