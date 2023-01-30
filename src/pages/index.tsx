import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import RouteHandler from './public/RouteHandler';

const SecretPage: React.FC = () => {
  return <div>This is a secret page!</div>;
};

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <RouteHandler />
    </Main>
  );
};

export default Index;
