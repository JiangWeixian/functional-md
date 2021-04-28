type LinkProps = {
  alt?: string
  src?: string
  children?: string
}

export const link = (props: LinkProps) => {
  return `[${props.alt || props.children || ''}](${props.src || ''})`
}
