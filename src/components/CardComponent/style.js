import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
    width: 200px;
    & img {
        height: 200px;
        width: 200px;
    };
    position: relative;

`
export const WrapperImageStyle = styled.img`
    top: -1;
    left: -1;
    border-top-left-radius: 3px;
    position: absolute;
    height: 20px !important;
    width: 88px !important;
`

export const StyleNameProduct = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: rgb(56, 56, 61);
`

export const WrapperReportText = styled.div`
    font-size: 14px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
    margin: 8px 0 2px;

`

export const WrapperPriceText = styled.div`
    color: rgb(255, 66, 78);
    font-size: 18px;
    font-weight: 500;
`

export const WrapperDiscountText = styled.span`
    color: rgb(255, 66, 78);
    font-size: 12px;
    font-weight: 500px;
`