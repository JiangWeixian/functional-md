import { inlineBlock } from './block'

type BadgeProps = {
  value?: number
}

export const badge = ({ value = 0 }: BadgeProps) => {
  if (value === 0) {
    return ''
  }
  return inlineBlock(['`', `+${value}`, '`'])
}
