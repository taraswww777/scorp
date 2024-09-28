import { FC, ReactNode } from 'react';

interface TemplateProps {
  a: ReactNode;
}

export const Template: FC<TemplateProps> = ({ a }) => {
  return (
    <div className="w-full">
      {a}
    </div>
  );
}
