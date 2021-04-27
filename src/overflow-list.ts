import { badge } from './badge'

type OverflowListProps = {
  list?: string[]
  max?: number
}

export const overflowList = ({ max = Infinity, list = [] }: OverflowListProps) => {
  let sliced = list || []
  const len = list.length
  if (max && len > max) {
    sliced = list?.slice(0, max)
  }
  const badgeCount = Math.max(len - max, 0)
  const content = sliced.join(', ')
  if (badgeCount > 0) {
    return [content, ' ', badge({ value: badgeCount })].join('')
  }
  return content
}
