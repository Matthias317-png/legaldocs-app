declare module 'next/link';
declare module 'next/font/google';
declare module 'lucide-react';
declare module '@/components/ui/button';
declare module '@/components/ui/card';
declare module '@/components/ui/dropdown-menu';
declare module '@/components/ui/input';
declare module 'react';
declare module 'next/navigation';
declare module 'next/server';

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module 'react' {
  export interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    accept?: string
    alt?: string
    autoComplete?: string
    autoFocus?: boolean
    capture?: boolean | string
    checked?: boolean
    crossOrigin?: string
    disabled?: boolean
    enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
    form?: string
    formAction?: string
    formEncType?: string
    formMethod?: string
    formNoValidate?: boolean
    formTarget?: string
    height?: number | string
    list?: string
    max?: number | string
    maxLength?: number
    min?: number | string
    minLength?: number
    multiple?: boolean
    name?: string
    pattern?: string
    placeholder?: string
    readOnly?: boolean
    required?: boolean
    size?: number
    src?: string
    step?: number | string
    type?: string
    value?: string | ReadonlyArray<string> | number
    width?: number | string
  }

  export interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // Standard HTML Attributes
    class?: string
    className?: string
    contentEditable?: boolean | 'inherit'
    contextMenu?: string
    dir?: string
    draggable?: boolean
    hidden?: boolean
    id?: string
    lang?: string
    placeholder?: string
    slot?: string
    spellCheck?: boolean
    style?: CSSProperties
    tabIndex?: number
    title?: string
    translate?: 'yes' | 'no'
  }

  export interface DOMAttributes<T> {
    children?: ReactNode
    dangerouslySetInnerHTML?: {
      __html: string
    }
    onClick?: (event: MouseEvent<T, MouseEvent>) => void
    onContextMenu?: (event: MouseEvent<T, MouseEvent>) => void
    onDoubleClick?: (event: MouseEvent<T, MouseEvent>) => void
    onDrag?: (event: DragEvent<T>) => void
    onDragEnd?: (event: DragEvent<T>) => void
    onDragEnter?: (event: DragEvent<T>) => void
    onDragExit?: (event: DragEvent<T>) => void
    onDragLeave?: (event: DragEvent<T>) => void
    onDragOver?: (event: DragEvent<T>) => void
    onDragStart?: (event: DragEvent<T>) => void
    onDrop?: (event: DragEvent<T>) => void
    onMouseDown?: (event: MouseEvent<T, MouseEvent>) => void
    onMouseEnter?: (event: MouseEvent<T, MouseEvent>) => void
    onMouseLeave?: (event: MouseEvent<T, MouseEvent>) => void
    onMouseMove?: (event: MouseEvent<T, MouseEvent>) => void
    onMouseOut?: (event: MouseEvent<T, MouseEvent>) => void
    onMouseOver?: (event: MouseEvent<T, MouseEvent>) => void
    onMouseUp?: (event: MouseEvent<T, MouseEvent>) => void
    onTouchCancel?: (event: TouchEvent<T>) => void
    onTouchEnd?: (event: TouchEvent<T>) => void
    onTouchMove?: (event: TouchEvent<T>) => void
    onTouchStart?: (event: TouchEvent<T>) => void
    onKeyDown?: (event: KeyboardEvent<T>) => void
    onKeyPress?: (event: KeyboardEvent<T>) => void
    onKeyUp?: (event: KeyboardEvent<T>) => void
    onFocus?: (event: FocusEvent<T>) => void
    onBlur?: (event: FocusEvent<T>) => void
    onChange?: (event: ChangeEvent<T>) => void
    onInput?: (event: FormEvent<T>) => void
    onSubmit?: (event: FormEvent<T>) => void
    onReset?: (event: FormEvent<T>) => void
  }

  export interface AriaAttributes {
    'aria-activedescendant'?: string
    'aria-atomic'?: boolean | 'false' | 'true'
    'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
    'aria-busy'?: boolean | 'false' | 'true'
    'aria-checked'?: boolean | 'false' | 'mixed' | 'true'
    'aria-colcount'?: number
    'aria-colindex'?: number
    'aria-colspan'?: number
    'aria-controls'?: string
    'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time'
    'aria-describedby'?: string
    'aria-details'?: string
    'aria-disabled'?: boolean | 'false' | 'true'
    'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'
    'aria-errormessage'?: string
    'aria-expanded'?: boolean | 'false' | 'true'
    'aria-flowto'?: string
    'aria-grabbed'?: boolean | 'false' | 'true'
    'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
    'aria-hidden'?: boolean | 'false' | 'true'
    'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling'
    'aria-keyshortcuts'?: string
    'aria-label'?: string
    'aria-labelledby'?: string
    'aria-level'?: number
    'aria-live'?: 'off' | 'assertive' | 'polite'
    'aria-modal'?: boolean | 'false' | 'true'
    'aria-multiline'?: boolean | 'false' | 'true'
    'aria-multiselectable'?: boolean | 'false' | 'true'
    'aria-orientation'?: 'horizontal' | 'vertical'
    'aria-owns'?: string
    'aria-placeholder'?: string
    'aria-posinset'?: number
    'aria-pressed'?: boolean | 'false' | 'mixed' | 'true'
    'aria-readonly'?: boolean | 'false' | 'true'
    'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals'
    'aria-required'?: boolean | 'false' | 'true'
    'aria-roledescription'?: string
    'aria-rowcount'?: number
    'aria-rowindex'?: number
    'aria-rowspan'?: number
    'aria-selected'?: boolean | 'false' | 'true'
    'aria-setsize'?: number
    'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'
    'aria-valuemax'?: number
    'aria-valuemin'?: number
    'aria-valuenow'?: number
    'aria-valuetext'?: string
  }

  export interface CSSProperties {
    [key: string]: string | number | undefined
  }

  export type ReactNode = React.ReactElement | string | number | boolean | null | undefined

  export interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
    type: T
    props: P
    key: Key | null
  }

  export type JSXElementConstructor<P> = ((props: P) => ReactElement<any, any> | null)

  export type Key = string | number

  export interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
    target: EventTarget & T
  }

  export interface SyntheticEvent<T = Element, E = Event> {
    bubbles: boolean
    cancelable: boolean
    currentTarget: EventTarget & T
    defaultPrevented: boolean
    eventPhase: number
    isTrusted: boolean
    nativeEvent: E
    preventDefault(): void
    stopPropagation(): void
    target: EventTarget & T
    timeStamp: number
    type: string
  }

  export interface EventTarget {
    value?: string
  }

  export interface MouseEvent<T = Element, E = NativeMouseEvent> extends UIEvent<T, E> {}
  export interface TouchEvent<T = Element> extends UIEvent<T, NativeTouchEvent> {}
  export interface KeyboardEvent<T = Element> extends UIEvent<T, NativeKeyboardEvent> {}
  export interface FocusEvent<T = Element> extends UIEvent<T, NativeFocusEvent> {}
  export interface FormEvent<T = Element> extends SyntheticEvent<T> {}
  export interface DragEvent<T = Element> extends MouseEvent<T, NativeDragEvent> {}
  export interface UIEvent<T = Element, E = NativeUIEvent> extends SyntheticEvent<T, E> {}
} 