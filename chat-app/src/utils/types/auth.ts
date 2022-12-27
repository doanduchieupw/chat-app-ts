export type CreateUserParams = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export type LoginUserParams = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};
