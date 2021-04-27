import { title } from '../src/title'

describe('title', () => {
  test('h1', () => {
    expect(title({ heading: 1, children: 'h1' })).toMatchSnapshot()
  })

  test('h2', () => {
    expect(title({ heading: 2, children: 'h2' })).toMatchSnapshot()
  })

  test('h3', () => {
    expect(title({ heading: 3, children: 'h3' })).toMatchSnapshot()
  })

  test('h4', () => {
    expect(title({ heading: 4, children: 'h4' })).toMatchSnapshot()
  })
})
