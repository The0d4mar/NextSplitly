import { useOperationModifier } from '@/hooks/useOperationModifaer';
import { useSliceOperation } from '@/hooks/useSliceOperation';
import { Operation, PlotPoint } from '@/interfaces/interfaces';
import React, {FC} from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';



interface MainPlot__PlotProps{
    data: PlotPoint[]
    showPeriod: string;
    chosenPeriod?: string[]

}
const MainPlot__Plot:FC<MainPlot__PlotProps> = ({data, showPeriod, chosenPeriod = []}) => {
      return (
     <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="income" stroke="#82ca9d" name="Доход" />
        <Line type="monotone" dataKey="expenses" stroke="#ff4d4f" name="Расходы" />
        <Line type="monotone" dataKey="savings" stroke="#8884d8" name="Накопления" />
    </LineChart>
  );
};

export default MainPlot__Plot;