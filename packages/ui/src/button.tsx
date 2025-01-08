export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ children, ...rest }: ButtonProps): JSX.Element {
  return (
    <button
      type='button'
      {...rest}
      style={{
        outline: 'none',
        backgroundColor: '#28dd89',
        border: '1px sold #444444',
        borderRadius: '4px',
        padding: '4px 8px',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  )
}

Button.displayName = 'Button'
