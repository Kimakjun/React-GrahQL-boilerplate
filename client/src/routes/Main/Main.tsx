import { FC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import HELLO from '@queries/hello/hello.queries';
import { Hello } from '@type/api';
import { Button, Layout } from 'antd';
import styled from '@theme/styled';

const StyledComponent = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.PRIMARY};
`;

const Main: FC = () => {
  const { data, loading } = useQuery<Hello>(HELLO);

  return (
    <>
      <Button type="primary">회원가입</Button>
      {loading ? <span>loading..</span> : data?.hello.result}
      <StyledComponent>hihi</StyledComponent>
    </>
  );
};

export default Main;
