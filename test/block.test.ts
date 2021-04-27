import { block, inlineBlock } from '../src/block'

describe('block', () => {
  test('support single param', () => {
    expect(block('')).toMatchSnapshot()
  })

  test('support mutiple params', () => {
    expect(block('h1', 'h2')).toMatchSnapshot()
  })

  test('inline block support single param', () => {
    expect(inlineBlock('')).toMatchSnapshot()
  })

  test('inline block support mutiple params', () => {
    expect(inlineBlock('h1', 'h2')).toMatchSnapshot()
  })
})
