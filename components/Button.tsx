import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import clsx from 'clsx'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  arrow?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  arrow = false,
  className,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const base = 'inline-flex items-center gap-2 font-medium rounded-lg transition-all duration-200 font-sans'

  const variants = {
    primary: 'bg-green-DEFAULT hover:bg-green-light text-navy-DEFAULT glow-green-sm hover:glow-green',
    secondary: 'bg-transparent border border-grey-DEFAULT/60 hover:border-green-DEFAULT text-navy-DEFAULT hover:bg-white',
    ghost: 'text-navy-DEFAULT/60 hover:text-navy-DEFAULT bg-transparent',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }

  const classes = clsx(base, variants[variant], sizes[size], disabled && 'opacity-50 cursor-not-allowed', className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {arrow && <ArrowUpRight size={16} />}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
      {arrow && <ArrowUpRight size={16} />}
    </button>
  )
}
