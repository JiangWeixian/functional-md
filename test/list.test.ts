import { list } from '../src/list'
import { inlineBlock } from '../src/block'

describe('list', () => {
  test('list should work', () => {
    expect(list({ dataSource: ['1', '2'] })).toMatchSnapshot()
  })

  test('limit should work', () => {
    expect(list({ dataSource: ['1', '2'], limit: 1 })).toMatchSnapshot()
  })

  test('render item should work', () => {
    expect(
      list({
        dataSource: [{ id: 'jw', name: 'jiangweixian' }],
        renderItem: (v) => inlineBlock([v.name, v.id]),
      }),
    ).toMatchSnapshot()
  })
})
