import { Center } from '@mantine/core';
import RegisterForm from '../components/forms/RegisterForm';

const Register = () => {
  return (
    <Center
      sx={(theme) => ({
        height: '100vh',
        backgroundColor: theme.colors.dark[5],
      })}
    >
      <RegisterForm />
    </Center>
  );
};

export default Register;
