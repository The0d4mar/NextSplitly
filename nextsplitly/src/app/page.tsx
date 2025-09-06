'use client'

import IndicatorsCont from "@/components/shades/IndicatorsCont";
import UserFilterPart from "@/components/shades/UserFilterPart";
import UserFiltersBtn from "@/components/shades/UserFiltersBtn/UserFiltersBtn";
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
    </div>
  );
}
