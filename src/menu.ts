import { block, inlineBlock } from './block'
import { listItem } from './list'

type Menu = {
  title: string
  items?: (Menu | string)[]
}

type MenuProps = {
  dataSource: Menu[]
}

const prefixable = (level: number = 0) => {
  if (level === 0) {
    return ''
  }
  return ' '.repeat(level)
}

const isStringMenu = (items: (Menu | string)[] = []): items is string[] => {
  return typeof items[0] === 'string'
}

const isObjectMenu = (items: (Menu | string)[] = []): items is Menu[] => {
  return typeof items[0] === 'object'
}

const getSubMenu = (dataSource: (Menu | string)[] = [], level = 0) => {
  if (dataSource.length === 0) {
    return ''
  }
  if (isStringMenu(dataSource)) {
    const data: string[] = dataSource.map((v) => {
      return inlineBlock(prefixable(level), listItem(v))
    })
    return block(data)
  }
  if (isObjectMenu(dataSource)) {
    const data: string[] = dataSource.map((v) => {
      const parent = inlineBlock(prefixable(level), listItem(v.title))
      const children = getSubMenu(v.items, level + 1)
      if (children === '') {
        return parent
      }
      return block(parent, children)
    })
    return block(data)
  }
  return ''
}

export const menu = ({ dataSource = [] }: MenuProps) => {
  return getSubMenu(dataSource, 0)
}
