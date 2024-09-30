import { PageTemplate, Header, Footer } from 'src/components/PageTemplate';
import { ModelCatalog } from 'src/modules';

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
