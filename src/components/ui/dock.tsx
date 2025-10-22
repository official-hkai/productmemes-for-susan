import React, { PropsWithChildren, useRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const dockVariants = cva(
  'mx-auto w-max h-full gap-2 rounded-2xl border p-2 flex items-end',
  {
    variants: {
      variant: {
        default: 'bg-background/80 backdrop-blur-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface DockProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dockVariants> {}

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(dockVariants({ variant, className }))}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Dock.displayName = 'Dock';

export interface DockItemProps {
  className?: string;
  children: React.ReactNode;
}

const DockItem = React.forwardRef<HTMLDivElement, DockItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex aspect-square cursor-pointer items-center justify-center relative',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
DockItem.displayName = 'DockItem';

export interface DockLabelProps {
  children: React.ReactNode;
  className?: string;
}

const DockLabel = ({ children, className }: DockLabelProps) => {
  return (
    <div
      className={cn(
        'absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 transition-opacity group-hover:opacity-100',
        className
      )}
    >
      {children}
    </div>
  );
};

export interface DockIconProps {
  className?: string;
  children: React.ReactNode;
}

const DockIcon = ({ children, className }: DockIconProps) => {
  return <div className={cn('h-full w-full', className)}>{children}</div>;
};

export { Dock, DockItem, DockLabel, DockIcon };
