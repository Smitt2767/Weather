import React from "react";
import {
  AreaChart,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ data, chartTab }) => {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={chartTab.color} stopOpacity={0.8} />
            <stop offset="95%" stopColor={chartTab.color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="time" stroke="#fff" />
        <YAxis stroke="#fff" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={chartTab.name}
          stroke={chartTab.color}
          fillOpacity={1}
          fill="url(#color)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
