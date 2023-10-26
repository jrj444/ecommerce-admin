"use client";

import Echarts, { EchartsOption } from "./echarts";

interface OverviewProps {
  data: { name: string; total: number }[];
}

const Overview: React.FC<OverviewProps> = ({ data }) => {
  const option = {
    xAxis: {
      type: "category",
      data: data.map(item => item.name),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data.map(item => item.total),
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
      },
    ],
  } as EchartsOption;

  return (
    <div className="w-full h-[350px]">
      <Echarts option={option} />
    </div>
  );
};

export default Overview;
