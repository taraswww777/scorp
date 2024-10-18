"use client";
import { FC, useState } from "react";
import { mockListModels } from "src/__mock__";
import { CatalogModelItemDTO } from "src/types/dto/CatalogModelItemDTO";
import Image from "next/image";
import { TagComments, TagLikes } from "src/uiKit";
import Link from "next/link";
import { ROUTES } from "src/constants/routes";
import { UserInline } from "src/components/UserInline";

export const ModelCatalog: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [listModels, setListModels] = useState<CatalogModelItemDTO[]>(
    Array.from(mockListModels.values())
  );

  return (
    <div className="w-full">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 items-start">
        {listModels.map((modelItem) => (
          <li
            key={modelItem.uuid}
            className="flex flex-wrap gap-y-2 justify-between content-between h-full"
          >
            <Link href={ROUTES.modelDetail({ modelUUID: modelItem.uuid })}>
              <Image
                src={modelItem.previewImgUrl}
                alt={modelItem.name}
                width={360}
                height={256}
                className="w-full"
              />
              <div className="text-textDark text-xl mt-2">{modelItem.name}</div>
            </Link>
            <div className="w-full flex flex-nowrap justify-between items-center">
              <UserInline author={modelItem.author} />
              <div className="flex flex-1 justify-end gap-2 mt-1">
                <TagLikes>{modelItem.likes}</TagLikes>
                <TagComments>{modelItem.comments.length}</TagComments>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
