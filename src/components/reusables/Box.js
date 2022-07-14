import {styled} from '@stitches/react'

export const Box = styled('div', {
  display: 'block',
  variants: {
    display: {
      true: {
        display: 'inline-block',
      },
    },
    display: {
      flex: {
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
      },
    },
    display: {
      inlineFlex: {
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
      },
    },
  },
})
