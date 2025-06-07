// src/components/ui/tooltip.tsx
import * as React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className: string;
}

export function Tooltip({ content, children, className }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        {/*  
          asChild = true means Radix will attach hover/focus handlers to whatever
          you pass into <Tooltip> as “children.” If children is just a string,
          it won’t work—children must be a real DOM element (e.g. <span> or <button>).
        */}
        <RadixTooltip.Trigger asChild className={`${className}`}>{children}</RadixTooltip.Trigger>

        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side="top"
            align="center"
            className="z-50 bg-goldenbrown text-white max-w-[25ch] rounded px-2 py-1 text-sm leading-none select-none pointer-events-none mix-blend-difference"
          >
            {content}
            <RadixTooltip.Arrow className="fill-goldenbrown" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
