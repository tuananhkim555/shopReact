/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Col, Row, Image } from 'antd'
import imageProduct from '../../assets/shop/anhtikiproduct.webp'
import imageProductSmall1 from '../../assets/shop/anhsmaillproduct1.webp'
import imageProductSmall2 from '../../assets/shop/anhsmallproduct2.webp'
import imageProductSmall3 from '../../assets/shop/anhsmallproduct3webp.webp'
import imageProductSmall4 from '../../assets/shop/anhsmallproduct4.webp.webp'
import imageProductSmall5 from '../../assets/shop/anhsmallproduct5.webp.webp'
import { WrapperStyleColImage, WrapperStyleImageSmall } from './style'

const ProductDetailsComponent = () => {
  return (
    <Row style={{ padding: '16px', background: '#fff' }}>
        <Col span={10}>
            <Image src={imageProduct} alt="image product" preview={false}/>
            <Row style={{ paddingTop: '15px', justifyContent: 'space-between',  }}>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall1} alt="image small" preview={false}/>
                 </WrapperStyleColImage>
                 <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall2} alt="image small" preview={false}/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall3} alt="image small" preview={false}/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall4} alt="image small" preview={false}/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall5} alt="image small" preview={false}/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall5} alt="image small" preview={false}/>
                </WrapperStyleColImage>
            </Row>
        </Col>
        <Col span={14}>2</Col>
    </Row>
  )
}

export default ProductDetailsComponent
