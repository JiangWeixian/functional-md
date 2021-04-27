import { code, inlineCode } from '../src/code'

describe('code', () => {
  test('language should work', () => {
    expect(code({ language: 'tsx', value: 'const a = 1' })).toMatchSnapshot()
  })

  test('language is not required', () => {
    expect(code({ value: 'const a = 1' })).toMatchSnapshot()
  })

  test('inline code shoudl work', () => {
    expect(inlineCode({ value: 'const a = 1' })).toMatchSnapshot()
  })
})
