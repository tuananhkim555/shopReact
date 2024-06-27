// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Badge, Col } from 'antd' 
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
  return (
    
    <div>
        <WrapperHeader>
            <Col span={6}>
                <WrapperTextHeader>TUAN ANH - SHOP</WrapperTextHeader>
            </Col>
            <Col span={12}>
            <ButtonInputSearch
                size="large"
                bordered={false}
                textButton="Tìm kiếm"
                placeholder="Tìm những gì bạn cần..."
     
            />

            </Col>
            <Col span={6} style={{
                display:'flex',
                gap: '20px',
                alignItems: 'center'
            }}>
                <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize:'30px' }} />           
                    <div>
                        <WrapperTextHeaderSmall>Đăng nhập/Đăng ký
                        </WrapperTextHeaderSmall>
                        <div>
                        <WrapperTextHeaderSmall>Tài khoản
                        </WrapperTextHeaderSmall>
                        <CaretDownOutlined />
                        </div>             
                    </div>
                </WrapperHeaderAccount>
                <div>    
                    <Badge count={4} size='small'>
                        <ShoppingCartOutlined style={{
                            color:'#fff',
                            fontSize:'30px'
                        }} />
                    </Badge>
                            <WrapperTextHeaderSmall>Giỏ hàng
                            </WrapperTextHeaderSmall>
                </div>
                       
            </Col>
        </WrapperHeader>
    </div>
  )
}

export default HeaderComponent
