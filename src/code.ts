import { block, inlineBlock } from './block'

type CodeProps = {
  language?: string
  value?: string
}

export const code = (props: CodeProps) => {
  return block(['```' + (props.language || ''), props.value || '', '```'])
}

export const inlineCode = (props: Omit<CodeProps, 'language'>) => {
  return inlineBlock(['`', props.value || '', '`'])
}
