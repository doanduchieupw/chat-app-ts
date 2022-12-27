import { Center } from '@mantine/core';
import LoginForm from '../components/forms/LoginForm';

const Login = () => {
  return (
    <Center
      sx={(theme) => ({
        height: '100vh',
        backgroundColor: theme.colors.dark[5],
      })}
    >
      <LoginForm />
    </Center>
  );
};

export default Login;
