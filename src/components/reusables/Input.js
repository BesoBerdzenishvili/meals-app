import React from 'react'

export default function Input({variant = 'normal', type, value, onChange}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      style={{width: variant === 'normal' ? '200px' : '100%'}}
    />
  )
}
