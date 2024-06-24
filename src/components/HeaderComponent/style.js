import { Row } from 'antd'
import styled from 'styled-components'

export const WrapperHeader = styled(Row)`
    padding: 25px 100px;
    background-color: #000;
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
`

export const WrapperTextHeader = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-align: left;
`

export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items:center;
    color: #fff;
    gap: 10px;
    font-size: 16px;
`

export const WrapperTextHeaderSmall = styled.span` 
    color: #fff;
    font-size: 16px;
    white-space: nowrap;

`