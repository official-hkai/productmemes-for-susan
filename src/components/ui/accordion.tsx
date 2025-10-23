import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & { index?: number; isLast?: boolean }
>(({ className, index = 0, isLast = false, ...props }, ref) => {
  // 后面的卡片有更高的 z-index，确保它们始终在前面的卡片上方
  const baseZIndex = 10 + index * 2;
  
  return (
    <AccordionPrimitive.Item 
      ref={ref} 
      style={{ zIndex: baseZIndex } as React.CSSProperties}
      className={cn(
        isLast ? "rounded-2xl" : "rounded-t-2xl",
        "overflow-hidden transition-all duration-300 relative",
        "bg-[#faf9f6]", // 更淡的米白色背景
        "shadow-[0_6px_16px_rgba(0,0,0,0.15)]",
        "hover:shadow-[0_10px_28px_rgba(0,0,0,0.2)] hover:-translate-y-2",
        "data-[state=open]:shadow-[0_10px_28px_rgba(0,0,0,0.2)]",
        index > 0 && "-mt-4",
        className
      )}
      {...props} 
    />
  );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex relative">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center pt-4 pb-6 pl-5 pr-16 cursor-pointer group",
        "transition-all duration-200",
        className,
      )}
      {...props}
    >
      {children}
      <motion.div
        className="absolute right-5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-data-[state=open]:rotate-180"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)',
          border: '2px solid rgba(255,255,255,0.5)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.3)'
        }}
      >
        <ChevronDown className="w-4 h-4 text-foreground/70" />
      </motion.div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden"
    {...props}
  >
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="bg-white/50 backdrop-blur-sm"
    >
      <div className={cn("px-5 pb-6 pt-0", className)}>
        {children}
      </div>
    </motion.div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
