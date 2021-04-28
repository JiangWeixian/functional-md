import { image } from '../src/image'

describe('image', () => {
  test('image should work', () => {
    expect(image({ alt: 'alt', src: 'https://github.com' })).toMatchSnapshot()
  })
})
