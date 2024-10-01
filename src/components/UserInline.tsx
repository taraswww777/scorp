import { FC } from 'react';
import Image from 'next/image';

interface UserInlineProps {
  author: {
    nikName: string,
    previewImgUrl?: string,
  }
}

export const UserInline: FC<UserInlineProps> = ({ author }) => {
  return (
    <div className="flex flex-nowrap gap-1.5">
      <div className="w-6 h-6 rounded-3xl">
        {author.previewImgUrl ? (
          <Image src={author.previewImgUrl} width={24} height={24} alt="" />
        ) : (
          <Image src="/assets/mockImages/userDefault.png" width={24} height={24} alt="" />
        )}
      </div>
      <div className="text-textSecondary">{author.nikName}</div>
    </div>
  );
}
