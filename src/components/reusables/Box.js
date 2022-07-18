import React from 'react'

export default function Box({as: Component = 'div', display = 'block', ...args}) {
  return (
    <Component
      style={{
        display: display,
        margin: args.m,
        padding: args.p,
        justifyContent: args.justifyContent,
        alignItems: args.alignItems,
        alignSelf: args.alignSelf,
      }}
    >
      {args.children}
    </Component>
  )
}
