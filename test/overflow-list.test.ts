import { overflowList } from '../src/overflow-list'

describe('overflow list', () => {
  test('max undefined should render direct', () => {
    expect(
      overflowList({
        list: ['a', 'b', 'c'],
      }),
    ).toMatchSnapshot()
  })

  test('list more than max should be overflowed', () => {
    console.log(
      overflowList({
        list: ['a', 'b', 'c'],
        max: 2,
      }),
    )
    expect(
      overflowList({
        list: ['a', 'b', 'c'],
        max: 2,
      }),
    ).toMatchSnapshot()
  })
})
