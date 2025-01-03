import { FC, PropsWithChildren } from 'react';
import { classNames } from 'src/utils/classNames';

interface TextProps {
  secondary?: boolean;
  primary?: boolean;
}

export const T: FC<PropsWithChildren<TextProps>> = ({
  children,
  secondary,
  primary,
  ...props
}) => {
  return (
    <span
      className={classNames(
        'font-normal text-textDefault',
        secondary && 'text-sm',
        primary && 'text-2xl',
      )}
      {...props}
    >
      {children}
    </span>
  )
}
