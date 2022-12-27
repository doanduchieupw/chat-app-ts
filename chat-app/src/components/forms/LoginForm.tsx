import { Input, Button } from '@mantine/core';
import { IconAt } from '@tabler/icons';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputPassword from './password';
import { postLoginUser } from '../../utils/api/auth';
import { LoginUserParams } from '../../utils/types/auth';
import { useNavigate } from 'react-router-dom';

interface ILogin {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup.string().required('Required').email('Email invalid'),
  password: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    )
    .required('Please enter your password'),
});

const LoginForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
  });
  const navigate = useNavigate();

  // const mutation = useMutation({
  //   mutationFn: (data: LoginUserParams) => postLoginUser(data),
  //   onSuccess: () => {
  //     console.log('success');
  //     navigate('/conversations');
  //   },
  // });
  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    await postLoginUser(data);
    navigate('/conversations');
    console.log('next /conv ');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} icon={<IconAt />} placeholder='Your email' />
      {errors.email && <p className='error'>{errors.email.message}</p>}
      <Controller
        name='password'
        control={control}
        render={({ field: { onChange, value } }) => <InputPassword onChange={onChange} value={value} />}
      />
      {errors.password && <p className='error'>{errors.password.message}</p>}
      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default LoginForm;
