import { FC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import HELLO from '@queries/hello/hello.queries';
import { Hello } from '@type/api';
import { Button, Layout } from 'antd';

const Main: FC = () => {
  const { data, loading } = useQuery<Hello>(HELLO);

  return (
    <>
      <Button type="primary">회원가입</Button>
      {loading ? <span>loading..</span> : data?.hello.result}
    </>
  );
};

export default Main;
