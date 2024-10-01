import { FC } from 'react';
import { WithModelUuid } from 'src/constants/routes';
import { ModelDetailUI } from 'src/modules/ModelDetail/ModelDetailUI';
import { genCatalogModelItem } from 'src/__mock__/generators/genCatalogModelItem';

type ModelDetailProps = WithModelUuid;

export const ModelDetail: FC<ModelDetailProps> = () => {
  // TODO: Получаем данные о модели
  const modelDetail = genCatalogModelItem();
  // const modelDetail = mockListModels.get(modelUUID) || genCatalogModelItem();

  return (
    <ModelDetailUI modelDetail={modelDetail}/>
  )
}
