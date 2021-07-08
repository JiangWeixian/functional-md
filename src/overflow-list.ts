import { badge } from './badge'

type OverflowListProps = {
  /**
   * @deprecated use dataSource instead
   */
  list?: string[]
  /**
   * @deprecated use max instead
   */
  max?: number
  dataSource?: string[]
  limit?: number
}

export const overflowList = ({ limit = Infinity, dataSource = [] }: OverflowListProps) => {
  let sliced = dataSource || []
  const len = dataSource.length
  if (limit && len > limit) {
    sliced = dataSource?.slice(0, limit)
  }
  const badgeCount = Math.max(len - limit, 0)
  const content = sliced.join(', ')
  if (badgeCount > 0) {
    return [content, ' ', badge({ value: badgeCount })].join('')
  }
  return content
}
