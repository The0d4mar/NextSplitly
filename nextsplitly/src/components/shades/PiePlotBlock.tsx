import { useSeparateData } from '@/hooks/useSeparateData';
import { returnData } from '@/testdata';
import React, {FC} from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PiePlotBlock__Pie from '../PiePlotBlock__Pie';
import PlotsHeader from '../PlotsHeader';
import { useSliceOperation } from '@/hooks/useSliceOperation';
import { useOperationData } from '@/hooks/useOperationModifaer';

interface PiePlotBlockProps{

}
const PiePlotBlock:FC<PiePlotBlockProps> = () => {

    function getRandomBrightColor(): string {
        const hue = Math.floor(Math.random() * 300);
        const saturation = 70 + Math.random() * 30;   // 70–100%
        const lightness = 40 + Math.random() * 30;    // 40–70% (не тёмный, не белый)
        return `hsl(${hue}, ${80}%, ${50}%)`;
    }

    const testData = returnData()
    const timeData = useSliceOperation(testData, [])
    const { line, incomePie, expensePie } = useOperationData(timeData, 'months');
    const colorIncrementIndexArray:string[] = []
    const colorExpendIndexArray:string[] = []
    let numberOfColor = 0

    while(numberOfColor < incomePie.length){
        const color:string = getRandomBrightColor();
        if(colorIncrementIndexArray.indexOf(color) == -1){
            colorIncrementIndexArray.push(color)
            numberOfColor+=1
        }
    }
    numberOfColor = 0

        while(numberOfColor < expensePie.length){
        const color:string = getRandomBrightColor();
            if(colorExpendIndexArray.indexOf(color) == -1){
                colorExpendIndexArray.push(color)
                numberOfColor+=1
            }
    }

  return (
    <div className='w-352'>
        <PlotsHeader title='Сводка'/>
        <div className='flex justify-between h-110 mt-8'>
            <PiePlotBlock__Pie header={'Структура доходов'} data={incomePie} colorArray={colorIncrementIndexArray}/>
            <PiePlotBlock__Pie header={'Структура расходов'} data={expensePie} colorArray={colorExpendIndexArray}/>
        </div>
    </div>
  );
};

export default PiePlotBlock;