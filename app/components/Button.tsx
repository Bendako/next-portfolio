"use client";

import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

const getVariantClasses = (variant: ButtonVariant) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
  };
  return variants[variant];
};

const getSizeClasses = (size: ButtonSize) => {
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  return sizes[size];
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  isLoading = false,
  onClick,
  className = '',
  ariaLabel,
}: ButtonProps) => {
  // Early return for loading state
  if (isLoading) {
    return (
      <button
        className={`
          inline-flex items-center justify-center
          rounded-md font-medium transition-colors
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          disabled:pointer-events-none disabled:opacity-50
          ${getVariantClasses(variant)}
          ${getSizeClasses(size)}
          ${className}
        `}
        disabled
        aria-busy="true"
        aria-label={ariaLabel || 'Loading'}
      >
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
        Loading...
      </button>
    );
  }

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center
        rounded-md font-medium transition-colors
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        disabled:pointer-events-none disabled:opacity-50
        ${getVariantClasses(variant)}
        ${getSizeClasses(size)}
        ${className}
      `}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      tabIndex={0}
      role="button"
      aria-label={ariaLabel || children?.toString()}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;