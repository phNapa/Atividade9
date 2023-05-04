import React from 'react'
import Styles from './Input.module.css'
const Input = ({placeholder}) => {
  return (
    <div>
        <input type="text" className={Styles.red} placeholder={placeholder}/>
    </div>
  )
}

export default Input
