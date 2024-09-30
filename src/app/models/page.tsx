import { PageTemplate, Header, Footer } from 'src/components/PageTemplate';

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
