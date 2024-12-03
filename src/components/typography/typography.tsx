import { ComponentProps } from "react";
import "./typography.css";

export const H1 = ({
  children,
  className = "",
  ...props
}: ComponentProps<"h1">) => (
  <h1 className={`h1 ${className}`} {...props}>
    {children}
  </h1>
);

export const H2 = ({
  children,
  className = "",
  ...props
}: ComponentProps<"h2">) => (
  <h2 className={`h2 ${className}`} {...props}>
    {children}
  </h2>
);

export const H3 = ({
  children,
  className = "",
  ...props
}: ComponentProps<"h2">) => (
  <h3 className={`h3 ${className}`} {...props}>
    {children}
  </h3>
);

export const H4 = ({
  children,
  className = "",
  ...props
}: ComponentProps<"h4">) => (
  <h4 className={`h4 ${className}`} {...props}>
    {children}
  </h4>
);

export const P = ({
  children,
  className = "",
  ...props
}: ComponentProps<"p">) => (
  <p className={`p ${className}`} {...props}>
    {children}
  </p>
);

export const Small = ({
  children,
  className = "",
  ...props
}: ComponentProps<"small">) => (
  <small className={`small ${className}`} {...props}>
    {children}
  </small>
);

export const Blockquote = ({
  children,
  className = "",
  ...props
}: ComponentProps<"blockquote">) => (
  <blockquote className={`blockquote ${className}`} {...props}>
    {children}
  </blockquote>
);
