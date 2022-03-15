import { Header } from 'components/Header';

export const WithHeader = (Component: React.ComponentType<any>) => {
  const MyComponent = (props: any) => (
    <>
      <Header />
      <Component {...props} />
    </>
  );
  return MyComponent;
};
