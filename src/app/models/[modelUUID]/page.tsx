import { PageTemplate, Header, Footer } from 'src/components/PageTemplate';
import { WithModelUuid } from 'src/constants/routes';
import { mockListModels } from 'src/__mock__';
import { genCatalogModelItem } from 'src/__mock__/generators/genCatalogModelItem';

interface DetailModelPageProps {
  params: WithModelUuid
}

export default function DetailModelPage({ params: { modelUUID } }: DetailModelPageProps) {

  // TODO: Получаем данные о модели
  const detailModel = mockListModels.get(modelUUID) || genCatalogModelItem();

  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    >
      <h1>Страница модели</h1>
      <pre>{JSON.stringify(detailModel, undefined, 2)}</pre>
    </PageTemplate>
  );
}
