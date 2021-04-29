type LinkProps = {
  alt?: string
  href?: string
  children?: string
}

export const link = (props: LinkProps) => {
  return `[${props.alt || props.children || ''}](${props.href || ''})`
}
