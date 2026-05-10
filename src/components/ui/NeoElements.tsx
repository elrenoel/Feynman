import React from 'react';
import { cn } from '@/src/lib/utils';

export interface NeoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'surface' | 'white';
}

export const NeoCard: React.FC<NeoCardProps> = ({ children, className, variant = 'white', ...props }) => {
  const variants = {
    white: 'bg-white',
    primary: 'bg-[#a0e082]',
    secondary: 'bg-[#fd92df]',
    tertiary: 'bg-[#ffc390]',
    surface: 'bg-[#ecefe4]',
  };

  return (
    <div
      className={cn(
        'border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'black' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const NeoButton: React.FC<NeoButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  const variants = {
    primary: 'bg-[#a0e082] text-black hover:bg-[#b3f493]',
    secondary: 'bg-[#fd92df] text-black hover:bg-[#ffd7ef]',
    tertiary: 'bg-[#ffc390] text-black hover:bg-[#ffdcc1]',
    black: 'bg-black text-white hover:bg-gray-800',
    ghost: 'bg-transparent border-transparent shadow-none hover:bg-gray-100',
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(
        'border-2 border-black font-bold uppercase tracking-wider transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
        variant !== 'ghost' && 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
