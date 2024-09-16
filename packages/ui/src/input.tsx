import * as React from "react";

import { cn } from "@portfolio/ui";
import { TokensIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, ...props }, ref) => {
    const StartIcon = startIcon;

    return (
      <div className="w-full relative">
        {StartIcon && (
          <div className="absolute left-1.5 top-1/2 transform -translate-y-1/2">
            <StartIcon className="text-black/50" strokeWidth={2.5} />
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex w-full border-input bg-transparent px-3 py-3 text-xl font-semibold transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black/50 placeholder:tracking-tight focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            startIcon && "ml-5",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
