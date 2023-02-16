import { useRouter } from 'next/router';
import RouteHandler from './public/RouteHandler';

const Index = () => {
  const router = useRouter();
  return (
      <RouteHandler />
  );
};

export default Index;
