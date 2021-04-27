import { block } from './block'

type ListProps<T> = {
  dataSource?: T[]
  renderItem?: (value: T) => string
  limit?: number
}

const listItem = (value: string) => {
  return ['- ', value].join('')
}

export const list = <T>({ dataSource = [], limit = Infinity, ...props }: ListProps<T>) => {
  const lists = dataSource.slice(0, limit).map((v) => {
    let content: any = v
    if (props.renderItem) {
      content = props.renderItem(v)
    }
    return listItem(content)
  })
  let tail = ''
  if (limit < dataSource.length) {
    tail = listItem('...')
  }
  return block(lists.concat(tail))
}
