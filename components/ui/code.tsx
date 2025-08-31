import * as React from "react"

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <code
        ref={ref}
        className={`relative rounded bg-slate-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ${className || ''}`}
        {...props}
      >
        {children}
      </code>
    )
  }
)
Code.displayName = "Code"

export { Code }