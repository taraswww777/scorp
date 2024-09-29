import React, { FC } from 'react';
import { FullLogo } from 'src/components/FullLogo';
import Link from 'next/link';
import { ROUTES } from 'src/constants/routes';
import { Button, LinkButton } from 'src/uiKit';
import { VARIANT } from 'src/uiKit/constants/VARIANT';

export const Header: FC = () => {
  return (
    <div className="w-full flex flex-nowrap items-center gap-x-9">
      <FullLogo />
      <nav className="grow">
        <ul className="flex flex-nowrap m-0 p-0">
          <li><Link className="p-2" href={ROUTES.home}>Проекты</Link></li>
          <li><Link className="p-2" href={ROUTES.authors}>Авторы</Link></li>
          <li><Link className="p-2" href={ROUTES.community}>Сообщества</Link></li>
        </ul>
      </nav>
      <div className="">
        <input placeholder="Поиск" />
      </div>
      <div className="">
        <Button>
          Создать
        </Button>
        <LinkButton variant={VARIANT.subtle}>
          Войти
        </LinkButton>
      </div>
    </div>
  );
}
