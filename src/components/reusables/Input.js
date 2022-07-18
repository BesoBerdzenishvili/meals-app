import React from 'react'

export default function Input({variant = 'normal', ...args}) {
  return (
    <input
      type={args.type}
      value={args.value}
      onChange={args.onChange}
      style={{width: variant === 'normal' ? '200px' : '100%'}}
    />
  )
}
