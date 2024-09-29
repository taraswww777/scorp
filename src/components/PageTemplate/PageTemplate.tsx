import { FC, PropsWithChildren, ReactNode } from 'react';

interface PageTemplateProps {
  header?: ReactNode;
  footer?: ReactNode;
}

export const PageTemplate: FC<PropsWithChildren<PageTemplateProps>> = ({
  children,
  header,
  footer,
}) => {
  return (
    <div className="w-full bg-background h-screen">
      <header className="w-full sticky top-0 p-4">
        {header}
      </header>
      <main className="w-full px-4">
        {children}
      </main>
      <footer className="w-full sticky top-full p-4">
        {footer}
      </footer>
    </div>
  );
}
