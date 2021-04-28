import { link } from '../src/link'

describe('link', () => {
  test('link should work', () => {
    expect(link({ alt: 'alt', src: 'https://github.com' })).toMatchSnapshot()
  })

  test('link should support children', () => {
    expect(link({ children: 'alt', src: 'https://github.com' })).toMatchSnapshot()
  })
})
