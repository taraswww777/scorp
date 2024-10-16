import { PageTemplate, Header, Footer } from 'src/components/PageTemplate';
// import { WithModelUuid } from 'src/constants/routes';
// import { mockListModels } from 'src/__mock__';
import type { Metadata } from 'next';
import { titleWithSiteName } from 'src/utils/titleWithSiteName';
import { ModelDetail } from 'src/modules/ModelDetail';

export const metadata: Metadata = {
  title: titleWithSiteName('Детальная страница модели'),
};

// interface DetailModelPageProps {
//   params: WithModelUuid
// }

export default function DetailModelPage() {
// export default function DetailModelPage({ params: { modelUUID } }: DetailModelPageProps) {

  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    >
      {/* TODO: пробросить modelUUID */}
      <ModelDetail modelUUID={''} />
    </PageTemplate>
  );
}
