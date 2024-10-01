import { FC } from 'react';
import { CatalogModelItemDTO } from 'src/types/dto/CatalogModelItemDTO';
import { UserInline } from 'src/components/UserInline';
import { Tag } from 'src/uiKit';

interface ModelDetailUIProps {
  modelDetail: CatalogModelItemDTO
}

export const ModelDetailUI: FC<ModelDetailUIProps> = ({ modelDetail }) => {
  const { images, name, author } = modelDetail;

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-y-4">
        <h1 className="text-3xl w-full">{name}</h1>
        <UserInline author={author} />
        <div className="w-full flex flex-nowrap gap-x-2.5">
          <Tag>Чайник</Tag>
          <Tag>Для дома</Tag>
          <Tag>Открытая лицензия</Tag>
        </div>
      </div>
      <div>
        <img src={images[0].fullImage} alt="" />
      </div>
      <pre>{JSON.stringify(modelDetail, undefined, 2)}</pre>
    </div>
  )
}
