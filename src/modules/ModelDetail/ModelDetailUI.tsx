import { FC } from 'react';
import { CatalogModelItemDTO } from 'src/types/dto/CatalogModelItemDTO';
import { UserInline } from 'src/components/UserInline';
import { Button, Icons, Tag, TagComments, TagFolder, TagLikes, TagTypes } from 'src/uiKit';
import { ImageGallery } from 'src/components/ImageGallery';

interface ModelDetailUIProps {
  modelDetail: CatalogModelItemDTO
}

export const ModelDetailUI: FC<ModelDetailUIProps> = ({ modelDetail }) => {
  const { images, name, author, uuid } = modelDetail;

  return (
    <div className="w-full" key={uuid}>
      <header className="flex flex-wrap gap-y-4">
        <h1 className="text-3xl w-full">{name}</h1>
        <UserInline author={author} />
        <div className="w-full flex flex-nowrap gap-x-2.5">
          <Tag>Чайник</Tag>
          <Tag>Для дома</Tag>
          <Tag>Открытая лицензия</Tag>
        </div>
      </header>
      <div className="w-full mt-10">
        <ImageGallery images={images} />
      </div>
      <div className="w-full mt-4 flex flex-nowrap gap-x-8">
        <div className="flex flex-nowrap gap-x-8">
          <TagComments type={TagTypes.white}>
            {modelDetail.comments.length}
          </TagComments>
          <TagLikes type={TagTypes.white}>
            {modelDetail.likes}
          </TagLikes>
          <TagFolder type={TagTypes.white}>
            {modelDetail.folders}
          </TagFolder>
        </div>
        <div className="flex flex-nowrap gap-x-4">
          <Button className={'font-medium'}>Заказать 3D-печать</Button>
          <Button
            className={'font-medium'}
            icon={<Icons.ArrowDown />}
          >Скачать</Button>
        </div>
      </div>
      <div className="mt-4">
        <pre>{JSON.stringify(modelDetail, undefined, 2)}</pre>
      </div>
    </div>
  )
}
