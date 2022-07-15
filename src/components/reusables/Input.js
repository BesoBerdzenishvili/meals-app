import React from 'react'

export default function Input({variant = 'normal'}) {
  return <input style={{width: variant === 'normal' ? '200px' : '100%'}} />
}
