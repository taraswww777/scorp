import React, { FC } from 'react';
import Image from "next/image";

export const FullLogo: FC = () => {
  return (
    <Image
      src="/assets/FullLogo-163x53.png"
      alt="Scorp logo"
      width={163}
      height={53}
      priority
    />
  );
}
