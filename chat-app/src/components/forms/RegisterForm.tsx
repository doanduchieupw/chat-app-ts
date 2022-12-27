import { Input, Button } from '@mantine/core';
import { IconAt } from '@tabler/icons';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputPassword from './password';
import { postRegisterUser } from '../../utils/api/auth';
import { CreateUserParams } from '../../utils/types/auth';

interface IRegister {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

const registerSchema = yup.object().shape({
  email: yup.string().required('Required').email('Email invalid'),
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  password: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    )
    .required('Please enter your password'),
});

const RegisterForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    },
    mode: 'onChange',
    resolver: yupResolver(registerSchema),
  });
  const mutation = useMutation({
    mutationFn: (data: CreateUserParams) => postRegisterUser(data),
  });
  const onSubmit: SubmitHandler<IRegister> = (data) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} icon={<IconAt />} placeholder='Your email' />
      {errors.email && <p className='error'>{errors.email.message}</p>}
      <Input {...register('firstName')} placeholder='First Name' />
      {errors.firstName && <p className='error'>{errors.firstName.message}</p>}
      <Input {...register('lastName')} placeholder='Last Name' />
      {errors.lastName && <p className='error'>{errors.lastName.message}</p>}
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

export default RegisterForm;
