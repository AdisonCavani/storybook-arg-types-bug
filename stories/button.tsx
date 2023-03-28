import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "gap-x-2 active:scale-95 disabled:cursor-not-allowed inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:opacity-50 data-[state=open]:bg-neutral-100",
  {
    variants: {
      variant: {
        default: "bg-neutral-900 text-white hover:bg-neutral-700",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline:
          "bg-transparent border border-neutral-200 hover:bg-neutral-100",
        subtle: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
        ghost:
          "bg-transparent hover:bg-neutral-100 data-[state=open]:bg-transparent",
        link: "bg-transparent underline-offset-4 hover:underline text-neutral-900 hover:bg-transparent",
        blue: "bg-blue-100 text-blue-900 hover:bg-blue-200",
        yellow:
          "bg-yellow-300 text-neutral-900 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 active:bg-yellow-400 hover:active:bg-yellow-500",
      },
      size: {
        default: "h-10 py-2 px-4",
        xxs: "h-6 px-1 rounded-md",
        xs: "h-8 px-3 rounded-md",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
