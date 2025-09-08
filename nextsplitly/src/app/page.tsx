'use client'

import IndicatorsCont from "@/components/shades/IndicatorsCont";
import LinePlotBlock from "@/components/shades/LinePlotBlock";
import PiePlotBlock from "@/components/shades/PiePlotBlock";
import UserFilterPart from "@/components/shades/UserFilterPart";
import UserFiltersBtn from "@/components/shades/UserFiltersBtn/UserFiltersBtn";
import { cn } from "@/lib/utils";
import { RootState } from "@/store/store";
import { MainPageContainer } from "@/styled/MainPageCont";
import { COLORS, SIZES } from "@/styled/theme";
import { useSelector, useDispatch } from 'react-redux';


export default function Home() {
  const activeUserStore = useSelector((store: RootState) => store.userStore.activeUser)
  const filterPeriod = ['По дням', 'По месяцам', 'По годам']
  const walletFiltres = ['Все счета', 'Основной', 'Накопительный', 'Общий']
  return (
    <div className="flex flex-col w-352 relative" >
        <IndicatorsCont children={<UserFilterPart activeUserStore={activeUserStore} filterPeriod={filterPeriod} walletFiltres={walletFiltres}/>}/>
        <section className={cn('flex flex-col relative gap-5', 'MainPage__customizeBlock')}>
          <IndicatorsCont children={<LinePlotBlock/>}/>
          <IndicatorsCont children={<PiePlotBlock/>}/>
        </section>
    </div>
  );
}
