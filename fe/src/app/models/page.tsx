import { PageTemplate, Header, Footer } from 'src/components/PageTemplate';
import type { Metadata } from 'next';
import { titleWithSiteName } from 'src/utils/titleWithSiteName';

export const metadata: Metadata = {
  title: titleWithSiteName('Список моделей'),
};

export default function ModelPage() {
  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    >
      Страница списка моделей
    </PageTemplate>
  );
}
