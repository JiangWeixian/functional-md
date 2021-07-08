import { overflowList } from '../src/overflow-list'

describe('overflow list', () => {
  test('max undefined should render direct', () => {
    expect(
      overflowList({
        dataSource: ['a', 'b', 'c'],
      }),
    ).toMatchSnapshot()
  })

  test('list more than max should be overflowed', () => {
    expect(
      overflowList({
        dataSource: ['a', 'b', 'c'],
        limit: 2,
      }),
    ).toMatchSnapshot()
  })
})
