import { type ReactNode } from "react"

type typographyProps = {
  children: ReactNode
}

export function TypographyH1({ children }: typographyProps) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  )
}

export function TypographyH3({ children }: typographyProps) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  )
}

export function TypographyH4({ children }: typographyProps) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  )
}

export function TypographyP({ children }: typographyProps) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
}

export function TypographyMuted({ children }: typographyProps) {
  return <p className="text-sm text-muted-foreground">{children}</p>
}
