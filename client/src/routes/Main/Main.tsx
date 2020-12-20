import { FC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import HELLO from '@queries/hello/hello.queries';
import { Hello } from '@type/api';

const Main: FC = () => {
  const { data, loading } = useQuery<Hello>(HELLO);
  console.log(data?.hello.result);
  return <div>{loading ? <span>loading..</span> : '데이터 전송 성공'}</div>;
};

export default Main;
