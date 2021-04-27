import constants from './constants'

type TitleProps = {
  heading?: number
  children?: string
}

export const title = ({ heading = 1, ...props }: TitleProps) => {
  const hash = '#'.repeat(heading)
  return [hash, ' ', props.children || '', constants.newline].join('')
}
