'use client'


import styled from "styled-components";
import { COLORS, SIZES } from "./theme";

 export const MainPageContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    &::after{
        content: '';
        background-color: ${COLORS.elementColor};
        position: absolute;
        top:100%;
        left: 0;
        width: 100vw;
        height: 1px;
    }
 `