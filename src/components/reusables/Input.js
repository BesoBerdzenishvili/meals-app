import React from 'react'
import {css} from '@stitches/react'

export default function Input({variant = 'normal', ...restProps}) {
  const inpStyle = css({
    variants: {
      variant: {
        normal: {
          width: '200px',
        },
        fluid: {
          width: '100%',
        },
      },
    },
  })
  return <input {...restProps} className={inpStyle({variant: variant})} />
}
