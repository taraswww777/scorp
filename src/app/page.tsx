import { PageTemplate } from 'src/components/PageTemplate/PageTemplate';
import { Header, Footer } from 'src/components/PageTemplate';
import { ModelCatalog } from 'src/modules';

export default function Home() {
  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    >
      <ModelCatalog/>
    </PageTemplate>
  );
}
