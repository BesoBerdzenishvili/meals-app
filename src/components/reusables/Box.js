import React from 'react'

export default function Box({
  as: Component,
  children,
  display = 'block',
  m,
  p,
  justifyContent,
  alignItems,
  alignSelf,
}) {
  return (
    <Component
      style={{display: display, margin: m, padding: p, justifyContent, alignItems, alignSelf}}
    >
      {children}
    </Component>
  )
}
Box.defaultProps = {
  as: 'div',
}
