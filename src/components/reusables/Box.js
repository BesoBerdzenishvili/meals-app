import React from 'react'
import {css} from '@stitches/react'

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
  const box = css({
    display: display,
    margin: m,
    padding: p,

    variants: {
      display: {
        flex: {
          justifyContent,
          alignItems,
          alignSelf,
        },
      },
    },
  })
  return (
    <Component className={box({display: display})} {...restProps}>
      {children}
    </Component>
  )
}
