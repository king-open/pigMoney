import * as React from 'react'
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    truncate?: boolean
    absolute?:boolean
    flex?: boolean
    relative?: boolean
    top?:string
    text?: string
    grid?: boolean
    before?: string
    after?: string
    shadow?: boolean
    w?:string
    h?:string
    bg?:string
    rounded?:string
    fixed?:string
    b?:string
    z?:string
    'focus:shadow'?:boolean
  }
  interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {
    w?: string
    h?: string
  }
}
