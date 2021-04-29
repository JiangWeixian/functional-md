import { link } from '../src/link'

describe('link', () => {
  test('link should work', () => {
    expect(link({ alt: 'alt', href: 'https://github.com' })).toMatchSnapshot()
  })

  test('link should support children', () => {
    expect(link({ children: 'alt', href: 'https://github.com' })).toMatchSnapshot()
  })
})
