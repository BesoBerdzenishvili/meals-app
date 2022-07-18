import React from 'react'

export default function Box({
  as: Component = 'div',
  display = 'block',
  justifyContent,
  alignItems,
  alignSelf,
  children,
  m,
  p,
  ...restProps
}) {
  return (
    <Component
      style={{
        display: display,
        margin: m,
        padding: p,
        justifyContent,
        alignItems,
        alignSelf,
      }}
      {...restProps}
    >
      {children}
    </Component>
  )
}
