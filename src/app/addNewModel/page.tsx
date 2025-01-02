import { PageTemplate, Header, Footer } from 'src/components/PageTemplate';
import type { Metadata } from 'next';
import { titleWithSiteName } from 'src/utils/titleWithSiteName';
import { AddNewModelModule } from 'src/modules/AddNewModelModule';

export const metadata: Metadata = {
  title: titleWithSiteName('Добавление новой модели'),
};

export default function AddNewModelPage() {
  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    >
      <AddNewModelModule />
    </PageTemplate>
  );
}
