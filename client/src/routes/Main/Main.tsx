import { FC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import HELLO from '@queries/hello/hello.queries';
import { Hello } from '@type/api';

const Main: FC = () => {
  const { data, loading } = useQuery<Hello>(HELLO);

  return <>{loading ? <span>loading..</span> : data?.hello.result}</>;
};

export default Main;
