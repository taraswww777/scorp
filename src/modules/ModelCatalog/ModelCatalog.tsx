"use client"
import { FC, useState } from 'react';
import { mockListModels } from 'src/__mock__';
import { CatalogModelItemDTO } from 'src/types/dto/CatalogModelItemDTO';
import Image from 'next/image';
import { Tag } from 'src/uiKit';


export const ModelCatalog: FC = () => {
  const [listModels, setListModels] = useState<CatalogModelItemDTO[]>(Array.from(mockListModels.values()));

  return (
    <div className="w-full">
      <ul className="flex flex-wrap gap-x-4 gap-y-8">
        {listModels.map((modelItem) => (
          <li key={modelItem.uuid} className="w-1/5 flex-auto">
            <Image src={modelItem.previewImgUrl} alt={modelItem.name} width={360} height={256} />
            <div className="text-textDark text-xl">{modelItem.name}</div>
            <div className="text-textSecondary">{modelItem.author.nikName}</div>
            <div className="flex gap-2">
              <Tag>
                <img src="/assets/icons/comments.svg" alt="comments" className="w-5" />
                {modelItem.comments.length}
              </Tag>

              <Tag>
                <img src="/assets/icons/likes.svg" alt="likes" className="w-5" />
                {modelItem.likes}
              </Tag>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
