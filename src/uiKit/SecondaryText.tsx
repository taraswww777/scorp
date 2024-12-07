import { FC, PropsWithChildren } from 'react';
import { classNames } from 'src/utils/classNames';

interface SecondaryTextProps extends Parameters<HTMLSpanElement> {
  isSecondary?: boolean;
}

export const SecondaryText: FC<PropsWithChildren<SecondaryTextProps>> = ({
  children,
  isSecondary,
  ...props
}) => {
  return (
    <span
      className={classNames(
        'font-normal text-textDefault',
        isSecondary && 'text-sm'
      )}
      {...props}
    >
      {children}
    </span>
  )
}
