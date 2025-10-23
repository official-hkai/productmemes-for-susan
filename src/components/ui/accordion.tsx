import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & { index?: number; isLast?: boolean }
>(({ className, index = 0, isLast = false, ...props }, ref) => {
  // 定义边框渐变色数组 - 使用#A60000的深浅变化
  const borderColors = [
    'border-l-8 border-l-[#A60000]',     // 深红
    'border-l-8 border-l-[#C61010]',     // 中深红
    'border-l-8 border-l-[#D62020]',     // 中红
    'border-l-8 border-l-[#E63030]',     // 中浅红
    'border-l-8 border-l-[#B81010]',     // 稍深红
    'border-l-8 border-l-[#CC1818]',     // 中等红
    'border-l-8 border-l-[#DD2828]',     // 浅红
  ];
  
  const borderClass = borderColors[index % borderColors.length];
  // 后面的卡片有更高的 z-index，确保它们始终在前面的卡片上方
  const baseZIndex = 10 + index * 2;
  
  return (
    <AccordionPrimitive.Item 
      ref={ref} 
      style={{ zIndex: baseZIndex } as React.CSSProperties}
      className={cn(
        isLast ? "rounded-2xl" : "rounded-t-2xl",
        "overflow-hidden transition-all duration-300 relative",
        "bg-[#f5f2ed]", // 淡米白色背景
        borderClass,
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
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between p-5 cursor-pointer group",
        "transition-all duration-200",
        className,
      )}
      {...props}
    >
      {children}
      <motion.div
        animate={{ rotate: 0 }}
        className="w-8 h-8 rounded-full border border-border flex items-center justify-center shrink-0 group-data-[state=open]:rotate-45 transition-transform duration-200"
      >
        <Plus className="w-4 h-4 text-muted-foreground" />
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
      <div className={cn("px-5 pb-5 pt-2", className)}>
        {children}
      </div>
    </motion.div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
