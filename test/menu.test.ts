import { menu } from '../src/menu'

describe('menu', () => {
  test('menu should work', () => {
    const dataSource = [
      {
        title: '1',
        items: [
          {
            title: '1.1',
          },
          {
            title: '1.2',
          },
        ],
      },
      {
        title: '2',
        items: [
          {
            title: '2.1',
          },
          {
            title: '2.2',
          },
        ],
      },
    ]
    expect(menu({ dataSource })).toMatchSnapshot()
  })

  test('menu should support string list items', () => {
    const dataSource = [
      {
        title: '1',
        items: ['1.1', '1.2'],
      },
      {
        title: '2',
        items: ['2.1', '2.2'],
      },
    ]
    expect(menu({ dataSource })).toMatchSnapshot()
  })
})
