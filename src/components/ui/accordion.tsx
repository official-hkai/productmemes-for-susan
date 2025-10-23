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
    'bg-gradient-to-r from-purple-100 to-purple-200',
    'bg-gradient-to-r from-yellow-100 to-yellow-200',
    'bg-gradient-to-r from-blue-100 to-blue-200',
    'bg-gradient-to-r from-orange-100 to-orange-200',
    'bg-gradient-to-r from-pink-100 to-pink-200',
    'bg-gradient-to-r from-green-100 to-green-200',
    'bg-gradient-to-r from-indigo-100 to-indigo-200',
  ];
  
  const colorClass = colors[index % colors.length];
  
  return (
    <AccordionPrimitive.Item 
      ref={ref} 
      className={cn(
        "mb-3 rounded-2xl overflow-hidden shadow-sm transition-all duration-300",
        "hover:shadow-md data-[state=open]:shadow-lg",
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
        "hover:bg-white/40",
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
