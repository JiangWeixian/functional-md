import { block } from '../src/block'

describe('block', () => {
  test('support single param', () => {
    expect(block('')).toMatchSnapshot()
  })

  test('support mutiple params', () => {
    expect(block('h1', 'h2')).toMatchSnapshot()
  })
})
