import * as React from "react";
// import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { ArrowRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "border border-[1.5px] border-primary bg-primary text-white font-[500] shadow-xs group-hover:bg-white group-hover:text-primary",
        destructive:
          "bg-destructive text-white shadow-xs group-hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-[1.5px] border-primary text-primary uppercase group-hover:text-white group-hover:bg-primary shadow-xs",
        "outline-secondary":
          "border border-[1.5px] text-white shadow-xs group-hover:bg-accent group-hover:text-primary",
        secondary:
          "border border-[1.5px] border-white bg-white text-primary group-hover:bg-transparent group-hover:text-white/60 group-hover:border-white/60",
        ghost:
          "group-hover:bg-accent group-hover:text-accent-foreground dark:group-hover:bg-accent/50",
        link: "text-primary underline-offset-4 group-hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  size,
  wrapperClassName,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    wrapperClassName?: string;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <div
      className={cn("flex items-center gap-1 group w-fit", wrapperClassName)}
    >
      <Comp
        data-slot="button"
        className={cn(
          "w-fit cursor-pointer",
          buttonVariants({ variant, size, className }),
          "rounded-full duration-300"
        )}
        {...props}
      />
      {variant === "default" && (
        <div className="flex items-center justify-center rounded-full size-9 bg-primary text-white -rotate-[45deg] group-hover:rotate-0 transition-all duration-300">
          <ArrowRight size={16} />
        </div>
      )}
      {variant === "secondary" && (
        <div className="flex items-center justify-center rounded-full size-9 bg-white text-primary -rotate-[45deg] group-hover:rotate-0 transition-all duration-300">
          <ArrowRight size={16} />
        </div>
      )}
    </div>
  );
}

export { Button, buttonVariants };
