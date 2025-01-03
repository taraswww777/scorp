import { FC, LinkHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { SIZE } from 'src/uiKit/constants/size';
import { VARIANT } from 'src/uiKit/constants/VARIANT';
import { classNames } from 'src/utils/classNames';

interface LinkButtonProps extends LinkHTMLAttributes<never> {
  size?: SIZE;
  icon?: ReactNode;
  variant?: VARIANT;
  /** Инлайновая кнопка в одну строку */
  inline?: boolean;
}

// Ссылка как кнопка
export const LinkButton: FC<PropsWithChildren<LinkButtonProps>> = ({
  children,
  icon,
  size = SIZE.medium,
  variant = VARIANT.neutral,
  inline = true,
  ...props
}) => {
  return (
    <a
      {...props}
      className={classNames('py-[12px] px-[16px] rounded-md cursor-pointer',
        inline && 'leading-none text-nowrap',
        variant === VARIANT.neutral && 'bg-neutral',
        size === SIZE.medium && 'py-[12px] px-[16px]',
      )}
    >
      {icon && (
        <div>{icon}</div>
      )}
      {children}
    </a>
  );
}
