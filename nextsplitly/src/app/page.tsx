'use client'

import { RootState } from "@/store/store";
import { MainPageContainer } from "@/styled/MainPageCont";
import { SIZES } from "@/styled/theme";
import { useSelector, useDispatch } from 'react-redux';


export default function Home() {
  const activeUserStore = useSelector((store: RootState) => store.userStore.activeUser)
  return (
    <div className="flex-col pl-10 items-start">
        <MainPageContainer>
          <div className="flex-col justify-between items-start box-content whitespace-nowrap">
            <div className="userName" style={{fontSize: SIZES.fontSizeH2, fontWeight:SIZES.fontWeightH2}}>
              {activeUserStore.name} {activeUserStore.secondName}
            </div>
            <div className="userDateOfRegistration" style={{fontSize: SIZES.fontSizeSmall}}>
              {activeUserStore.registerData}
            </div>
            
          </div>
          <div className="usersButtons">
            
          </div>
        </MainPageContainer>
    </div>
  );
}
