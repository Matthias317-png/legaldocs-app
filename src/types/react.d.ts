import * as React from 'react'

declare module 'react' {
  interface FormEvent<T = Element> extends SyntheticEvent<T> {
    target: EventTarget & T
  }
} 