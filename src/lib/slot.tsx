import * as React from "react";

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

/**
 * A simple Slot component that merges props with its child element.
 * This replaces @radix-ui/react-slot without external dependencies.
 */
const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, ...props }, ref) => {
    if (React.isValidElement(children)) {
      return React.cloneElement(children, {
        ...props,
        ...children.props,
        ref: (node: HTMLElement) => {
          // Handle ref from forwardRef
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLElement | null>).current = node;
          }
          // Handle ref from child element
          if (typeof children.ref === "function") {
            children.ref(node);
          } else if (children.ref) {
            (children.ref as React.MutableRefObject<HTMLElement | null>).current = node;
          }
        },
        className: [props.className, children.props.className].filter(Boolean).join(" "),
      } as any);
    }
    return <span ref={ref} {...props}>{children}</span>;
  }
);
Slot.displayName = "Slot";

export { Slot };
