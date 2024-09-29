import { PageTemplate } from 'src/components/PageTemplate/PageTemplate';
import { Header } from 'src/components/PageTemplate';

export default function Home() {
  return (
    <PageTemplate
      header={<Header />}
    />
  );
}
