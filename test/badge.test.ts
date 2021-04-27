import { badge } from '../src/badge'

describe('badge', () => {
  test('zero return empty', () => {
    expect(badge({ value: 0 })).toBe('')
  })

  test('badge should work', () => {
    expect(badge({ value: 1 })).toMatchSnapshot()
  })
})
