import { table } from '../src'

describe('table', () => {
  test('default render mode should work', () => {
    const data = table({
      columns: [
        {
          dataIndex: 'id',
          title: 'ID',
        },
        {
          dataIndex: 'name',
          title: 'NAME',
        },
      ],
      dataSource: [
        {
          id: 1,
          name: 'jw',
        },
        {
          id: 2,
          name: 'jiangweixian',
        },
      ],
    })
    expect(data).toMatchSnapshot()
  })

  test('dataIndex empty is allowed', () => {
    const data = table({
      columns: [
        {
          dataIndex: 'id',
          title: 'ID',
        },
        {
          dataIndex: '',
          title: 'NAME',
          render: (v) => v.name,
        },
      ],
      dataSource: [
        {
          id: 1,
          name: 'jw',
        },
        {
          id: 2,
          name: 'jiangweixian',
        },
      ],
    })
    expect(data).toMatchSnapshot()
  })
})
