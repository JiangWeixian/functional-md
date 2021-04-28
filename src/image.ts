type ImageProps = {
  alt?: string
  src?: string
}

export const image = (props: ImageProps) => {
  return `![${props.alt || ''}](${props.src || ''})`
}
