import React from 'react'

export default function Button({
  as: Component = 'button',
  children,
  size = 'normal',
  variant = 'primary',
  type = 'button',
}) {
  let bg
  let col

  if (variant === 'primary') {
    bg = 'blue'
    col = 'white'
  } else if (variant === 'secondary') {
    bg = 'grey'
    col = 'black'
  } else if (variant === 'alert') {
    bg = 'red'
    col = 'white'
  } else if (variant === 'link') {
    bg = 'transparent'
    col = 'blue'
  } else if (variant === 'transparent') {
    bg = 'transparent'
    col = 'black'
  }
  return (
    <Component
      style={{
        fontSize: size === 'normal' ? '14px' : '12px',
        padding: size === 'normal' ? '7px 10px' : '5px 8px',
        backgroundColor: bg,
        color: col,
      }}
      type={type}
    >
      {children}
    </Component>
  )
}
