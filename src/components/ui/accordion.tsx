import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & { index?: number }
>(({ className, index = 0, ...props }, ref) => {
  // 定义彩色渐变背景色数组
  const colors = [
    'bg-gradient-to-r from-purple-200 to-purple-300',
    'bg-gradient-to-r from-yellow-200 to-yellow-300',
    'bg-gradient-to-r from-blue-200 to-blue-300',
    'bg-gradient-to-r from-orange-200 to-orange-300',
    'bg-gradient-to-r from-pink-200 to-pink-300',
    'bg-gradient-to-r from-green-200 to-green-300',
    'bg-gradient-to-r from-indigo-200 to-indigo-300',
  ];
  
  const colorClass = colors[index % colors.length];
  // 后面的卡片有更高的 z-index，确保它们始终在前面的卡片上方
  const baseZIndex = 10 + index * 2;
  
  return (
    <AccordionPrimitive.Item 
      ref={ref} 
      style={{ zIndex: baseZIndex } as React.CSSProperties}
      className={cn(
        "rounded-2xl overflow-hidden transition-all duration-300 relative",
        "shadow-[0_4px_12px_rgba(0,0,0,0.08)]",
        "hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-2 hover:!z-[100]",
        "data-[state=open]:shadow-[0_8px_24px_rgba(0,0,0,0.12)] data-[state=open]:!z-[100]",
        index > 0 && "-mt-4",
        colorClass,
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
