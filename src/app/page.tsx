import { PageTemplate, Header, Footer } from 'src/components/PageTemplate';
import { ModelCatalog } from 'src/modules';
import type { Metadata } from 'next';
import { titleWithSiteName } from 'src/utils/titleWithSiteName';

export const metadata: Metadata = {
  title: titleWithSiteName('Главная'),
};

export default function HomePade() {
  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    >
      <ModelCatalog />
    </PageTemplate>
  );
}
