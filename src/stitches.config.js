import {createStitches} from '@stitches/react'

export const {styled, css, globalCss, keyframes, getCssText, theme, createTheme, config} =
  createStitches({
    media: {
      pressable: '(hover: none) and (pointer: coarse)',
    },
    theme: {
      fontSizes: {
        heading: '3.2rem',
        title: '2.4rem',
        base: '1.4rem',
        tiny: '1.2rem',
      },
    },
    utils: {
      linearGradient: (value) => ({
        backgroundImage: `linear-gradient(${value})`,
      }),

      bg: (value) => ({
        backgroundColor: value,
      }),

      square: (value) => ({
        width: value,
        height: value,
      }),

      ellipse: (value) => ({
        width: value,
        height: value,
        borderRadius: '50%',
      }),
    },
  })

export const injectGlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
})
