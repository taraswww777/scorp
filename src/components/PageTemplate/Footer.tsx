import React, { FC } from 'react';
import { FullLogo } from 'src/components/FullLogo';
import Link from 'next/link';
import { ROUTES } from 'src/constants/routes';
import { VARIANT } from 'src/uiKit/constants/VARIANT';

export const Footer: FC = () => {
  return (
    <div className="w-full flex flex-nowrap items-end">
      <div className="flex flex-nowrap items-center">
        <FullLogo />
        <span className="opacity-10 text-[23px] leading-none font-semibold text-black">2024</span>
      </div>
      <nav className="grow">
        <ul className="flex flex-nowrap m-0 p-0 gap-6 justify-center">
          <li><Link className="text-textSecondary" href={ROUTES.home}>Пользовательское соглашение</Link></li>
          <li><Link className="text-textSecondary" href={ROUTES.community}>Правила сервиса</Link></li>
        </ul>
      </nav>
      <div className="">
        <Link
          className="text-[18px] flex flex-nowrap gap-2 font-medium text-black"
          variant={VARIANT.subtle}
          href={'mailto:help@help.ru'}
        >
          <img src="/assets/icons/mail.svg" alt="Поддержка" className="w-5" />
          Поддержка
        </Link>
      </div>
    </div>
  );
}
