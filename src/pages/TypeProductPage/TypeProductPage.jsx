// eslint-disable-next-line no-unused-vars
import React, { Fragment } from 'react'
import NavBarComponent from '../../components/NavbarComponent/NavBarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavBar, WrapperProducts } from './style'

const TypeProductPage = () => {
    const onChange = () => {}
  return (
    <div style={{ padding: '0 120px', background: '#efefef' }}>
    <Row style={{ flexWrap: 'nowrap', paddingTop: '20px'}}>
        <WrapperNavBar span={4}>
            <NavBarComponent />
        </WrapperNavBar>
        <Col span={20}>
        <WrapperProducts>
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
             </WrapperProducts>
           <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{ textAlign: 'center', marginTop: '30px' }} />
         </Col>
    </Row>
      
   
        
    </div>
  )
}

export default TypeProductPage
