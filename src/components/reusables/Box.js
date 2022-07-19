import {useMemo} from 'react'
import {css} from '../../stitches.config'

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
  const boxStyles = useMemo(
    () =>
      css({
        display,
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
      }),
    [display, m, p, justifyContent, alignItems, alignSelf]
  )
  return (
    <Component className={boxStyles({display: display})} {...restProps}>
      {children}
    </Component>
  )
}
