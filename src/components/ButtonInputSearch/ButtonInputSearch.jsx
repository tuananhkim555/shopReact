
// eslint-disable-next-line no-unused-vars
import React from 'react'

import { SearchOutlined } from '@ant-design/icons'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ButtonInputSearch = (props) => {
    // eslint-disable-next-line react/prop-types
    const { size, placeholder, textButton, bordered, backgroundColorInput = '#fff', backgroundColorButton='linear-gradient(to top, #ff00cc 0%, #333399 0%, #ff00cc 100% )', colorButton= '#fff' } = props
  return (
    <div style={{ display:'flex'}}>
      <InputComponent
      size={size} 
      placeholder={placeholder} 
      bordered={bordered} 
      style={{ backgroundColor: backgroundColorInput }}/>;
      <ButtonComponent 
      size={size}  
      styleButton={{ background: backgroundColorButton, border: !bordered && 'none'}} 
      icon={<SearchOutlined style={{color: colorButton }}/>}
      textButton={textButton}
      styleTextButton={{ color: colorButton}}
      />  
    </div>
  )
}

export default ButtonInputSearch
