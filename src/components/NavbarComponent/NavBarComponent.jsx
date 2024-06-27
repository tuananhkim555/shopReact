// eslint-disable-next-line no-unused-vars
import React from 'react'
import { WrapperContent, WrapperLabelText, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'

const NavBarComponent = () => {
    const onChange = () => {}
    // eslint-disable-next-line no-unused-vars
    const renderContent = (type, options) => {
        switch(type) {
            case 'text':
                // eslint-disable-next-line no-unused-vars
                return options.map((option) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <WrapperTextValue>{option}</WrapperTextValue>         
                        )
                }) 
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                        {options.map((option) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <Checkbox value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                        <Checkbox value="B">B</Checkbox>    
                     </Checkbox.Group>
                )
                case 'star':
                    // eslint-disable-next-line no-unused-vars
                    return options.map((option) => {
                                return (
                                     // eslint-disable-next-line react/jsx-key
                                     <div style={{ display: 'flex', gap: '7px'}}>
                                        <Rate style={{ fontSize: '16px' }} disabled defaultValue={option} />
                                        <span style={{ fontSize: '14px' }}>{`Từ ${option} sao`}</span>
                                    </div>
                                    )
                                })
                    case 'price':
                    // eslint-disable-next-line no-unused-vars
                    return options.map((option) => {
                                return ( 
                                      // eslint-disable-next-line react/jsx-key
                                      <WrapperTextPrice>{option}</WrapperTextPrice>
                                    )
                                })
            default:
                return {}
        }
    }
  return (
    <div>
      <WrapperLabelText>Label</WrapperLabelText>
        <WrapperContent>
            {renderContent('text', ['Tủ Lạnh', 'TV', 'Laptop', 'Điện Thoại'])}
        </WrapperContent> 
    </div>
  )
}

export default NavBarComponent
