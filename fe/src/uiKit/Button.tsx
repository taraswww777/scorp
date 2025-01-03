import { ButtonHTMLAttributes, FC, PropsWithChildren, ReactNode } from 'react';
import { SIZE } from 'src/uiKit/constants/size';
import { VARIANT } from 'src/uiKit/constants/VARIANT';
import classNames from 'classnames';


interface ButtonProps extends ButtonHTMLAttributes<never> {
  size?: SIZE;
  icon?: ReactNode;
  variant?: VARIANT;
  /** Инлайновая кнопка в одну строку */
  inline?: boolean;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  icon,
  size = SIZE.medium,
  variant = VARIANT.neutral,
  inline = true,
  className= '',
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(className, 'py-[12px] px-[16px] rounded-md transition-all duration-300', {
        'leading-none text-nowrap': inline,
        'bg-neutral': variant === VARIANT.neutral,
        'py-[12px] px-[16px]': size === SIZE.medium,
      })}
    >
      {icon && (
        <div>{icon}</div>
      )}
      {children}
    </button>
  );
}
