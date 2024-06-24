/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './style'
import { StarFilled } from '@ant-design/icons'
import logoCard from '../../assets/shop/chinhhanglogo.png'


const CardComponent = () => {
  return (
        <WrapperCardStyle
        hoverable
        headStyle={{ width: '200px', height: '200px' }}
        style={{ width: 200 }}
        bodyStyle={{ padding: '10px' }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <img src={logoCard} 
            style={{ 
                    width: '88px', 
                    height:'20px', 
                    position: 'absolute', 
                    top: -1, 
                    left: -1,
                    borderTopLeftRadius: '3px' 
                }
            }/>
            <StyleNameProduct>Iphone</StyleNameProduct>
                <WrapperReportText> 
                    <span style={{ marginRight: '6px' }}>
                        <span>4.96</span>
                        <StarFilled style={{ fontSize:'12px', color: 'orange', marginLeft: '4px' }}/>
                    </span>
                        <span> | Da Ban 1000+</span>
                </WrapperReportText>
                <WrapperPriceText>15.000.000vnd 
                    <WrapperDiscountText>
                        -5%
                    </WrapperDiscountText>            
                    </WrapperPriceText>
        </WrapperCardStyle>
  )
}

export default CardComponent
