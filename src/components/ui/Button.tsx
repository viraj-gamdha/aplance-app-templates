import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import classNames from "classnames";
import s from "./Button.module.scss";
import { Link, type LinkProps } from "react-router-dom";

type ButtonVariants = "primary" | "bordered" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  children?: ReactNode;
  as?: "button" | "span";
}

export const Button: FC<ButtonProps> = ({
  variant,
  className,
  children = "Button",
  disabled,
  ...props
}) => {
  return (
    <button
      className={classNames(
        s.base,
        variant && s[variant],
        className,
        disabled && s.disabled
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

interface LinkButtonProps extends LinkProps {
  variant?: ButtonVariants;
  children?: ReactNode;
  disabled?: boolean;
}

export const LinkButton: FC<LinkButtonProps> = ({
  variant,
  children = "Link",
  className,
  to,
  replace,
  state,
  target,
  disabled,
  ...rest
}) => {
  const classes = classNames(
    s.base,
    variant && s[variant],
    className,
    disabled && s.disabled
  );

  return (
    <Link
      to={to}
      replace={replace}
      state={state}
      target={target}
      aria-disabled={disabled}
      className={classes}
      {...rest}
    >
      {children}
    </Link>
  );
};
