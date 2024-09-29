import { FC, PropsWithChildren } from 'react';

export const Tag: FC<PropsWithChildren> = ({
  children
}) => {
  return (
    <div
      className="bg-hover flex flex-nowrap gap-2.75 px-2.75 py-2.25 rounded-lg text-textSecondary font-medium text-xl overflow-hidden">
      {children}
    </div>
  );
}
