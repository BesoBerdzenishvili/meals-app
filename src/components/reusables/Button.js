import {css} from '../../stitches.config'

export default function Button({
  as: Component = 'button',
  size = 'normal',
  variant = 'primary',
  children,
  ...restProps
}) {
  const btnStyles = css({
    variants: {
      variant: {
        primary: {
          backgroundColor: 'blue',
          color: 'white',
        },
        secondary: {
          backgroundColor: 'grey',
          color: 'black',
        },
        alert: {
          backgroundColor: 'red',
          color: 'white',
        },
        link: {
          backgroundColor: 'transparent',
          color: 'vlue',
        },
        transparent: {
          backgroundColor: 'transparent',
          color: 'black',
        },
      },
      size: {
        normal: {fontSize: '14', padding: '7px 10px'},
        small: {fontSize: '12px', padding: '5px 8px'},
      },
    },
  })
  return (
    <Component className={btnStyles({variant: variant, size: size})} {...restProps}>
      {children}
    </Component>
  )
}
