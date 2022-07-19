import React from 'react'
import {styled} from '../../stitches.config'

export default function Input({fluid, ...restProps}) {
  const StyledInput = styled('input', {
    width: '200px',
    variants: {
      fluid: {
        true: {
          width: '100%',
        },
      },
    },
  })
  return <StyledInput {...restProps} fluid={fluid} />
}
