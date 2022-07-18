import React from 'react'

export default function Input({variant = 'normal', ...restProps}) {
  return <input {...restProps} style={{width: variant === 'normal' ? '200px' : '100%'}} />
}
