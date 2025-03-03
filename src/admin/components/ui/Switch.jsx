import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

const Switch = React.forwardRef(({ className = '', ...props }, ref) => (
    <SwitchPrimitive.Root
        className={`peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-200 ${className}`}
        {...props}
        ref={ref}
    >
        <SwitchPrimitive.Thumb className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
    </SwitchPrimitive.Root>
));

Switch.displayName = "Switch";

export { Switch };