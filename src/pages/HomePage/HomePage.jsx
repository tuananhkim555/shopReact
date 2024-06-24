// eslint-disable-next-line no-unused-vars
import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import  slider1  from '../../assets//shop/shop1.jpeg'
import  slider2  from '../../assets/shop/shop2.jpeg'
import  slider3  from '../../assets/shop/shop2.jpeg'
import CardComponent from '../../components/CardComponent/CardComponent'

const HomePage = () => {
  const arr = ['TV', 'Tu lanh', 'Laptop']
  return (
    <>
       <div style={{ padding: '0 120px' }}>
      <WrapperTypeProduct>
    {arr.map((item) => {
      return(
        <TypeProduct name={item} key={item}/>
      )
    })}
    </WrapperTypeProduct>
    </div>
       <div id="containerShop" style={{ backgroundColor: '#efefef', padding: '0 120px', height: '1000px'}}>
            <SliderComponent arrImages={[slider1, slider2, slider3]}/>
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <CardComponent />
            </div>
      </div>
    </>
  )
}

export default HomePage
