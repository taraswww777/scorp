import { PageTemplate } from 'src/components/PageTemplate/PageTemplate';
import { Header, Footer } from 'src/components/PageTemplate';

export default function Home() {
  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    />
  );
}
