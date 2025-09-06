'use client'

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
    <div className="flex flex-col w-352" >
        <MainPageContainer>
          <div className="flex-col justify-between items-start box-content whitespace-nowrap">
            <div className="userName" style={{fontSize: SIZES.fontSizeH2, fontWeight:SIZES.fontWeightH2}}>
              {activeUserStore.name} {activeUserStore.secondName}
            </div>
            <div className="userDateOfRegistration" style={{fontSize: SIZES.fontSizeSmall, color: `${COLORS.fontColor_opt}`}}>
              Дата регистрации: {activeUserStore.registerData}
            </div>
            
          </div>
          <div className="flex justify-between items-center gap-10">
            <UserFiltersBtn title={"Отображение"} choosenfilter={filterPeriod[0]} filters = {filterPeriod} />
            <UserFiltersBtn title={"Счета"} choosenfilter={walletFiltres[0]} filters = {walletFiltres} />
            
            
          </div>
        </MainPageContainer>
    </div>
  );
}
